export default [
  {
    id: "sunday",
    day: "Domingo",
    exercises: []
  },

  {
    id: "monday",
    day: "Segunda (Peito + Ombro + Tríceps)",
    exercises: [
      {
        id: "inclineDumbbellPress",
        name: "Supino inclinado com halteres",
        sets: [false, false, false],
        reps: "8 a 12 reps",
        rest: "1 minuto e 30 segundos",
        weight: ["", "", ""],
        text: "Controle total do movimento, foco em força com segurança",
        image: "/imgs/supino-inclinado-halter.jpg",
        muscleImage: "/imgs/muscle/supino-inclinado-halter.jpg",
        video: "/videos/supino-inclinado-halter.mp4"
      },
      {
        id: "machineChestPress",
        name: "Supino reto com halteres",
        sets: [false, false, false],
        reps: "10 a 12 reps",
        rest: "1 minuto e 30 segundos",
        weight: ["", "", ""],
        text: "Mais estabilidade e menos estresse articular",
        image: "/imgs/supino-reto-halter.jpg",
        muscleImage: "/imgs/muscle/supino-reto-halter.jpg",
        video: "/videos/supino-reto-halter.mp4"
      },
      {
        id: "lateralRaise",
        name: "Elevação lateral",
        sets: [false, false, false],
        reps: "12 a 15 reps",
        rest: "1 minuto",
        weight: ["", "", ""],
        text: "Cargas moderadas e execução limpa",
        image: "/imgs/elevacao-lateral.jpg",
        muscleImage: "/imgs/muscle/elevacao-lateral.jpg",
        video: "/videos/elevacao-lateral.mp4"
      },
      {
        id: "ropeTricepsPushdown",
        name: "Pulley tríceps com corda",
        sets: [false, false, false],
        reps: "10 a 15 reps",
        rest: "1 minuto",
        weight: ["", "", ""],
        text: "Extensão completa sem abrir demais os cotovelos",
        image: "/imgs/pulley-triceps.jpg",
        muscleImage: "/imgs/muscle/pulley-triceps.jpg",
        video: "/videos/pulley-triceps.mp4"
      },
      {
        id: "overheadTricepsExtension",
        name: "Tríceps francês com halter",
        sets: [false, false],
        reps: "10 a 12 reps",
        rest: "1 minuto",
        weight: ["", ""],
        text: "Alongamento e fortalecimento do tríceps",
        image: "/imgs/triceps-frances.jpg",
        muscleImage: "/imgs/muscle/triceps-frances.jpg",
        video: "/videos/triceps-frances.mp4"
      }
    ]
  },

  {
    id: "tuesday",
    day: "Terça",
    exercises: []
  },

  {
    id: "wednesday",
    day: "Quarta (Pernas completas)",
    exercises: [
      {
        id: "legPress",
        name: "Leg press",
        sets: [false, false, false],
        reps: "10 a 12 reps",
        rest: "1 minuto e 30 segundos",
        weight: ["", "", ""],
        text: "Amplitude confortável, sem travar os joelhos",
        image: "/imgs/leg-press.jpg",
        muscleImage: "/imgs/muscle/leg-press.jpg",
        video: "/videos/leg-press.mp4"
      },
      {
        id: "seatedLegCurl",
        name: "Mesa flexora",
        sets: [false, false, false],
        reps: "12 a 15 reps",
        rest: "1 minuto",
        weight: ["", "", ""],
        text: "Fortalecimento dos posteriores para proteger o joelho",
        image: "/imgs/mesa-flexora.jpg",
        muscleImage: "/imgs/muscle/mesa-flexora.jpg",
        video: "/videos/mesa-flexora.mp4"
      },
      {
        id: "legExtension",
        name: "Cadeira extensora",
        sets: [false, false],
        reps: "12 a 15 reps",
        rest: "1 minuto",
        weight: ["", ""],
        text: "Carga moderada e movimento controlado",
        image: "/imgs/cadeira-extensora.jpg",
        muscleImage: "/imgs/muscle/cadeira-extensora.jpg",
        video: "/videos/cadeira-extensora.mp4"
      },
      {
        id: "hipAbductor",
        name: "Cadeira abdutora",
        sets: [false, false],
        reps: "15 a 20 reps",
        rest: "1 minuto",
        weight: ["", ""],
        text: "Estabilidade do quadril e suporte ao joelho",
        image: "/imgs/cadeira-abdutora.jpg",
        muscleImage: "/imgs/muscle/cadeira-abdutora.jpg",
        video: "/videos/cadeira-abdutora.mp4"
      },
      {
        id: "standingCalfRaise",
        name: "Panturrilha sentado",
        sets: [false, false, false],
        reps: "15 a 20 reps",
        rest: "1 minuto",
        weight: ["", "", ""],
        text: "Pausa no topo para maior ativação",
        image: "/imgs/panturrilha-sentado.jpg",
        muscleImage: "/imgs/muscle/panturrilha-sentado.jpg",
        video: "/videos/panturrilha-sentado.mp4"
      }
    ]
  },

  {
    id: "thursday",
    day: "Quinta",
    exercises: []
  },

  {
    id: "friday",
    day: "Sexta (Costas + Bíceps + Core)",
    exercises: [
      {
        id: "latPulldown",
        name: "Pulley frente",
        sets: [false, false, false],
        reps: "8 a 12 reps",
        rest: "1 minuto e 30 segundos",
        weight: ["", "", ""],
        text: "Puxar até o peito com controle",
        image: "/imgs/pulley-costas.jpg",
        muscleImage: "/imgs/muscle/pulley-costas.jpg",
        video: "/videos/pulley-costas.mp4"
      },
      {
        id: "seatedRow",
        name: "Remada baixa",
        sets: [false, false, false],
        reps: "10 a 12 reps",
        rest: "1 minuto e 30 segundos",
        weight: ["", "", ""],
        text: "Foco na retração das escápulas",
        image: "/imgs/remada-baixa-aberta.jpg",
        muscleImage: "/imgs/muscle/remada-baixa-aberta.jpg",
        video: "/videos/remada-baixa-aberta.mp4"
      },
      {
        id: "barbellCurl",
        name: "Rosca direta",
        sets: [false, false],
        reps: "10 a 12 reps",
        rest: "1 minuto",
        weight: ["", ""],
        text: "Movimento controlado, sem roubar",
        image: "/imgs/rosca-direta.jpg",
        muscleImage: "/imgs/muscle/rosca-direta.jpg",
        video: "/videos/rosca-direta.mp4"
      },
      {
        id: "hammerCurl",
        name: "Rosca martelo",
        sets: [false, false],
        reps: "10 a 12 reps",
        rest: "1 minuto",
        weight: ["", ""],
        text: "Fortalecimento funcional do braço",
        image: "/imgs/rosca-martelo.jpg",
        muscleImage: "/imgs/muscle/rosca-martelo.jpg",
        video: "/videos/rosca-martelo.mp4"
      },
      {
        id: "plank",
        name: "Prancha",
        sets: [false, false, false],
        reps: "30 a 45 segundos",
        rest: "1 minuto",
        weight: ["", "", ""],
        text: "Core firme e lombar neutra",
        image: "/imgs/prancha.jpg",
        muscleImage: "/imgs/muscle/prancha.jpg",
        video: ""
      }
    ]
  },

  {
    id: "saturday",
    day: "Sábado",
    exercises: []
  }
];
