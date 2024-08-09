const predefinedResponses = {
    greeting: {
      keywords: ['hola', 'que tal', 'hey', 'que onda', 'me ayudas'],
      response: 'Hola que tal soy un chatbot creado por el equipo de desarrollo de UDB. ¿En qué puedo ayudarte?, si quieres información sobre la universidad puedes preguntarme o escribirme una palabra clave en base a lo que quieras hacer y yo te dare informacion sobre lo que buscas. 👋🤖'
    },
    academic: {
      keywords: ['calendario', '¿Cuál es la planificación académica para este semestre?', 'calendario academico', 'fechas academicas', '¿Cuál es el calendario académico para este semestre?'],
      response: 'el calendario academico se describe en este link que te proporciono: https://www.udb.edu.sv/udb/eventos 📅'
    },
    schedule: {
        keywords: ['horario', 'horario clase', '¿Dónde puedo encontrar mi horario de clases?'],
        response: 'Tu horario puedes revisarlo en el portal web, aqui te dejo el enlace: https://admacad.udb.edu.sv/PortalWeb/ 📅'
  },
  inscripcion: {
    keywords: ['inscripcion', 'periodos de inscripcion' ,'¿Cuándo son los períodos de inscripción para cursos?'],
    response: 'los períodos de inscripción ✅ empiezan en el mes de noviembre y julio para ambos ciclos, para mayor informacion puedes visitar el porta web (https://www.udb.edu.sv/udb/eventos) o bien la agenda (https://www.udb.edu.sv/udb/eventos)'
  },
  library: {
      keywords: ['libreria', 'biblioteca', '¿Dónde está la biblioteca y cuáles son sus horarios?'],
      response: 'La biblioteca se encuentra en el edificio principal de la universidad, en el segundo piso. Los horarios de la biblioteca son de lunes a viernes de 7:00 a.m. a 7:00 p.m. y los sábados de 8:00 a.m. a 12:00 p.m. 📚'
    },
  academyc_services: {
      keywords: ['¿Cómo puedo llegar al departamento de servicios estudiantiles?', 'servicio estudiantiles', '¿Cómo puedo contactar al departamento de servicios estudiantiles?'],
      response: 'para contactar al servicio estudiantil puedes llamar al numero 2222-2222 o bien visitar el edificio principal de la universidad en el tercer piso 📕'
    },
    events: {
        keywords: ['evento', 'evento importante', '¿Hay algún evento importante en el campus esta semana?'],
        response: 'Esta semana no hay eventos importantes en el campus, pero puedes revisar la agenda de eventos en el portal web de la universidad (https://www.udb.edu.sv/udb/eventos) 🛣️🏖️'
    },

    mental_problem: {
        keywords: ['estres', 'depresion', 'apoyo emocional', 'me siento triste', '¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemasemocionales?'],
        response: 'Si tienes un problema emocional o apoyo en caso de estres La universidad cuenta con un departamento especializado en apoyar el bienestar de los estudiantes. Puedes acudir a ellos para recibir orientación, apoyo psicológico, y asistencia en casos de estrés, ansiedad, o problemas emocionalesAtención Psicológica y de Bienestar Estudiantil. Si necesitas ayuda, puedes comunicarte con ellos a través de su correo electrónico: bienestar.udb.edu.sv 💆‍♂️💆‍♀️'
      },
    disability: {
        keywords: ['discapacidad', 'discapacidades', 'invalidez','¿Cuáles son los recursos disponibles para estudiantes con discapacidades?'],
        response: 'La Universidad Don Bosco suele contar con programas de inclusión que aseguran que los estudiantes con discapacidades tengan acceso a las mismas oportunidades educativas. Esto puede incluir adaptaciones en el entorno físico, herramientas tecnológicas, y servicios de apoyo académico específico'
      },
    mentoring: {
        keywords: ['mentoria', 'tutoria', 'tutores', 'tutor', '¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mirendimiento académico?'],
        response: 'La universidad ofrece servicios de tutoría en diferentes asignaturas para ayudar a los estudiantes a superar dificultades académicas. Estas tutorías pueden ser dirigidas por profesores o estudiantes avanzados. 🤓'
      },

    pasantias: {
        keywords: ['pasantias', 'practicas', 'practicas profesionales', 'trabajo', '¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para micarrera?'],
        response: 'La universidad generalmente tiene una Bolsa de Trabajo o un portal de empleos donde se publican ofertas de pasantías y prácticas profesionales. Estas oportunidades suelen estar alineadas con los programas académicos que ofrece la universidad. Asi mismo mantiene convenios con diversas empresas e instituciones, facilitando a los estudiantes la colocación en prácticas profesionales 😎'
      },
    cv: {
        keywords: ['curriculum vitae', 'curriculum', 'cv','¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?'],
        response: 'para la parte del cv, la universidad en su portal web proporciona modelos o plantillas de currículum que puedes adaptar según tu carrera y experiencia. 📃'
      },
    work_interview: {
        keywords: ['talleres', 'entrevista', 'entrevista de trabajo', '¿Hay talleres disponibles para prepararme para entrevistas de trabajo?'],
        response: 'La universidad ofrece talleres y seminarios para ayudar a los estudiantes a prepararse para entrevistas de trabajo. Estos talleres pueden incluir consejos sobre cómo presentarse, cómo responder a preguntas comunes, y cómo destacar sus habilidades y experiencia. 😎'
      },
      clubs: {
        keywords: ['danza', 'musica', 'deporte', 'clubs', '¿Qué clubes o actividades extracurriculares están disponibles en el campus?'],
        response: 'La universidad cuenta con una variedad de clubes y actividades extracurriculares para que los estudiantes participen. Estos clubes pueden incluir clubes deportivos, clubes de música, clubes de danza, clubes de debate, y mucho más. Participar en estos clubes es una excelente manera de conocer a otros estudiantes, desarrollar nuevas habilidades, y enriquecer tu experiencia universitaria. para mayor informacion al numero 2243-3454 🎭⚽🏀'
      },
    weekend_activity: {
        keywords: ['actividad extra', 'fin de semana', 'planes','¿Hay alguna actividad interesante planeada para el fin de semana?'],
        response: 'Este finde semana hay una feria de empleo en el campus, puedes revisar la agenda de eventos en el portal web de la universidad (https://www.udb.edu.sv/udb/eventos) 🛣️🏖️'
      },
    food: {
        keywords: ['desayuno', 'almuerzo', 'comida', 'chalet', '¿Cuáles son las opciones de alimentación disponibles en el campus?'],
        response: 'La universidad cuenta con varios chalets distribuidos en ambos campus, donde se pueden adquirir desayunos y almuerzos a precios accesibles. También hay máquinas expendedoras de bebidas y snacks en varios puntos del campus. 🥗🥪🧃'
      },
    default: {
      keywords: [],
      response: 'Perdon no entendi tu pregunta 😓 ¿podrias ser mas especifico?'
    }
  }
  
  export default predefinedResponses
  