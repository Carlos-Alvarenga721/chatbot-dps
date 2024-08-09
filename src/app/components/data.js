const predefinedResponses = {
    greeting: {
      keywords: ['hola', 'que tal', 'hey', 'que onda', 'me ayudas'],
      response: 'Hola que tal soy un chatbot creado por el equipo de desarrollo de UDB. ¿En qué puedo ayudarte?, si quieres información sobre la universidad puedes preguntarme o escribirme una palabra clave en base a lo que quieras hacer y yo te dare informacion sobre lo que buscas.'
    },
    academic: {
      keywords: ['calendario', '¿Cuál es la planificación académica para este semestre?', 'calendario academico', 'fechas academicas', '¿Cuál es el calendario académico para este semestre?'],
      response: 'el calendario academico se describe en este link que te proporciono: https://www.udb.edu.sv/udb/eventos'
    },
    schedule: {
        keywords: ['hola', 'que tal', 'hey', 'que onda', 'me ayudas'],
        response: 'Hola que tal soy un chatbot creado por el equipo de desarrollo de UDB. ¿En qué puedo ayudarte?, si quieres información sobre la universidad puedes preguntarme o escribirme una palabra clave en base a lo que quieras hacer y yo te dare informacion sobre lo que buscas.'
      },
    mental_problem: {
        keywords: ['estres', 'depresion', 'apoyo emocional', 'me siento triste', '¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemasemocionales?'],
        response: 'Si tienes un problema emocional o apoyo en caso de estres La universidad cuenta con un departamento especializado en apoyar el bienestar de los estudiantes. Puedes acudir a ellos para recibir orientación, apoyo psicológico, y asistencia en casos de estrés, ansiedad, o problemas emocionalesAtención Psicológica y de Bienestar Estudiantil. Si necesitas ayuda, puedes comunicarte con ellos a través de su correo electrónico:'
      },
    disability: {
        keywords: ['discapacidad', 'discapacidades', 'invalidez','¿Cuáles son los recursos disponibles para estudiantes con discapacidades?'],
        response: 'La Universidad Don Bosco suele contar con programas de inclusión que aseguran que los estudiantes con discapacidades tengan acceso a las mismas oportunidades educativas. Esto puede incluir adaptaciones en el entorno físico, herramientas tecnológicas, y servicios de apoyo académico específico'
      },
      mentoring: {
        keywords: ['mentoria', 'tutoria', 'tutores', 'tutor', '¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mirendimiento académico?'],
        response: 'La universidad ofrece servicios de tutoría en diferentes asignaturas para ayudar a los estudiantes a superar dificultades académicas. Estas tutorías pueden ser dirigidas por profesores o estudiantes avanzados.'
      },
    default: {
      keywords: [],
      response: 'Perdon no entendi tu pregunta 😓 ¿podrias ser mas especifico?'
    }
  }
  
  export default predefinedResponses
  