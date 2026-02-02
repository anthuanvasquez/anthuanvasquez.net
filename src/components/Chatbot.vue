<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue';
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  UserIcon,
  ComputerDesktopIcon,
} from '@heroicons/vue/24/outline';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const { $i18n } = useNuxtApp();
const { t } = useI18n();
const isOpen = ref(false);
const isLoading = ref(false);
const messages = ref<Message[]>([]);
const currentMessage = ref('');

const welcomeMessage = computed(() => t('chatbot.welcome'));
const placeholderText = computed(() => t('chatbot.placeholder'));
const sendButtonText = computed(() => t('chatbot.send'));
const chatbotTitle = computed(() => t('chatbot.title'));
const errorMessage = computed(() => t('chatbot.error'));

// Initialize with welcome message
onMounted(() => {
  messages.value = [
    {
      id: '1',
      content: welcomeMessage.value,
      isUser: false,
      timestamp: new Date(),
    },
  ];
});

const sendMessage = async () => {
  if (!currentMessage.value.trim() || isLoading.value) return;

  const userMessage: Message = {
    id: Date.now().toString(),
    content: currentMessage.value,
    isUser: true,
    timestamp: new Date(),
  };

  messages.value.push(userMessage);
  const messageToSend = currentMessage.value;
  currentMessage.value = '';
  isLoading.value = true;

  try {
    const response = await $fetch('/api/chatbot/chat', {
      method: 'POST',
      body: {
        message: messageToSend,
        locale: $i18n.locale.value,
      },
    });

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: response.response,
      isUser: false,
      timestamp: new Date(),
    };

    messages.value.push(botMessage);
  } catch (error) {
    console.error('Chat error:', error);

    const errorResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: errorMessage.value,
      isUser: false,
      timestamp: new Date(),
    };

    messages.value.push(errorResponse);
  } finally {
    isLoading.value = false;
  }
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
};

// Auto-scroll to bottom when new message is added
const messagesContainer = ref<HTMLElement>();
watch(
  messages,
  () => {
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop =
          messagesContainer.value.scrollHeight;
      }
    });
  },
  { deep: true }
);
</script>

<template>
  <!-- Floating Chat Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      :class="{ hidden: isOpen }"
      @click="isOpen = true"
    >
      <ChatBubbleLeftRightIcon class="h-6 w-6" />
    </button>
  </div>

  <!-- Chat Dialog -->
  <Dialog :open="isOpen" class="relative z-50" @close="isOpen = false">
    <div class="fixed inset-0 flex items-end justify-end p-4 sm:p-6">
      <DialogPanel
        class="bg-white rounded-2xl shadow-2xl w-full max-w-md h-96 flex flex-col overflow-hidden"
      >
        <!-- Header -->
        <div
          class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between"
        >
          <div class="flex items-center space-x-2">
            <ComputerDesktopIcon class="h-6 w-6" />
            <h3 class="font-semibold">
              {{ chatbotTitle }}
            </h3>
          </div>
          <button
            class="text-white hover:text-gray-200 transition-colors"
            @click="isOpen = false"
          >
            <XMarkIcon class="h-5 w-5" />
          </button>
        </div>

        <!-- Messages -->
        <div
          ref="messagesContainer"
          class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        >
          <div
            v-for="message in messages"
            :key="message.id"
            class="flex"
            :class="message.isUser ? 'justify-end' : 'justify-start'"
          >
            <div class="flex items-start space-x-2 max-w-xs">
              <div
                v-if="!message.isUser"
                class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <ComputerDesktopIcon class="h-4 w-4 text-white" />
              </div>

              <div
                class="px-4 py-2 rounded-2xl text-sm"
                :class="
                  message.isUser
                    ? 'bg-blue-600 text-white rounded-br-md'
                    : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                "
              >
                {{ message.content }}
              </div>

              <div
                v-if="message.isUser"
                class="flex-shrink-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center"
              >
                <UserIcon class="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          <!-- Loading indicator -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="flex items-start space-x-2">
              <div
                class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <ComputerDesktopIcon class="h-4 w-4 text-white" />
              </div>
              <div
                class="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-2"
              >
                <div class="flex space-x-1">
                  <div
                    class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  ></div>
                  <div
                    class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style="animation-delay: 0.1s"
                  ></div>
                  <div
                    class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style="animation-delay: 0.2s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="border-t bg-white p-4">
          <div class="flex space-x-2">
            <textarea
              v-model="currentMessage"
              :placeholder="placeholderText"
              class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="2"
              :disabled="isLoading"
              @keypress="handleKeyPress"
            ></textarea>
            <button
              :disabled="!currentMessage.trim() || isLoading"
              class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 transition-colors flex items-center justify-center"
              @click="sendMessage"
            >
              <PaperAirplaneIcon class="h-4 w-4" />
            </button>
          </div>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<style scoped>
.animate-bounce {
  animation: bounce 1.4s infinite;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
}
</style>
