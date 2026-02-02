import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

interface ChatRequest {
  message: string;
  locale?: string;
}

const knowledgeBase = {
  en: {
    about: `Anthuan Vásquez is a skilled Software Engineer specializing in JavaScript development and web engineering. He has extensive experience in modern web technologies and is passionate about creating efficient, scalable solutions.`,
    skills: `Expert in JavaScript, TypeScript, Vue.js, Nuxt.js, React.js, Node.js, and modern web development practices. Also experienced with cloud technologies, APIs, and database management.`,
    contact: `You can reach out to Anthuan through his website's contact form or connect with him on professional networks. He's always open to discussing new opportunities and collaborations.`,
  },
  es: {
    about: `Anthuan Vásquez es un Ingeniero de Software especializado en desarrollo JavaScript e ingeniería web. Tiene amplia experiencia en tecnologías web modernas y es apasionado por crear soluciones eficientes y escalables.`,
    skills: `Experto en JavaScript, TypeScript, Vue.js, Nuxt.js, React.js, Node.js y prácticas modernas de desarrollo web. También tiene experiencia con tecnologías cloud, APIs y gestión de bases de datos.`,
    contact: `Puedes contactar con Anthuan a través del formulario de contacto de su sitio web o conectar con él en redes profesionales. Siempre está abierto a discutir nuevas oportunidades y colaboraciones.`,
  },
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<ChatRequest>(event);
    const { message, locale = 'en' } = body;

    if (!message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message is required',
      });
    }

    const apiKey = useRuntimeConfig().groqApiKey;

    if (!apiKey) {
      // Provide fallback responses when no API key is configured
      const knowledge =
        knowledgeBase[locale as keyof typeof knowledgeBase] || knowledgeBase.en;

      const lowerMessage = message.toLowerCase();
      let fallbackResponse = '';

      if (
        lowerMessage.includes('skill') ||
        lowerMessage.includes('technology') ||
        lowerMessage.includes('experience')
      ) {
        fallbackResponse = knowledge.skills;
      } else if (
        lowerMessage.includes('about') ||
        lowerMessage.includes('who') ||
        lowerMessage.includes('background')
      ) {
        fallbackResponse = knowledge.about;
      } else if (
        lowerMessage.includes('contact') ||
        lowerMessage.includes('reach') ||
        lowerMessage.includes('email')
      ) {
        fallbackResponse = knowledge.contact;
      } else {
        fallbackResponse =
          locale === 'es'
            ? 'Gracias por tu pregunta. Puedes encontrar más información sobre Anthuan en su sitio web, o contactarlo directamente usando el formulario de contacto.'
            : 'Thank you for your question. You can find more information about Anthuan on his website, or contact him directly using the contact form.';
      }

      return {
        success: true,
        response: fallbackResponse,
        locale,
      };
    }

    const knowledge =
      knowledgeBase[locale as keyof typeof knowledgeBase] || knowledgeBase.en;

    const systemPrompt =
      locale === 'es'
        ? `Eres un asistente virtual para el sitio web de Anthuan Vásquez. Ayuda a los visitantes respondiendo preguntas sobre él, sus habilidades y experiencia.

Información sobre Anthuan:
- Acerca de: ${knowledge.about}
- Habilidades: ${knowledge.skills}
- Contacto: ${knowledge.contact}

Mantén las respuestas concisas, útiles y profesionales. Si no tienes información específica, sugiere que el visitante use el formulario de contacto.`
        : `You are a virtual assistant for Anthuan Vásquez's website. Help visitors by answering questions about him, his skills, and experience.

Information about Anthuan:
- About: ${knowledge.about}
- Skills: ${knowledge.skills}
- Contact: ${knowledge.contact}

Keep responses concise, helpful, and professional. If you don't have specific information, suggest the visitor use the contact form.`;

    const { ChatGroq } = await import('@langchain/groq');
    const chatModel = new ChatGroq({
      apiKey: apiKey,
      model: 'openai/gpt-oss-120b',
      temperature: 0.7,
    });

    const promptTemplate = ChatPromptTemplate.fromMessages([
      ['system', systemPrompt],
      ['human', '{input}'],
    ]);

    const outputParser = new StringOutputParser();
    const chain = promptTemplate.pipe(chatModel).pipe(outputParser);
    const response = await chain.invoke({
      input: message,
    });

    return {
      success: true,
      response,
      locale,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Chatbot error:', error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process chat request',
    });
  }
});
