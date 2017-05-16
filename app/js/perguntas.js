//Perguntas Pesquisadas
var perguntas = [
    {id: 1, pergunta:'Qual o nome do musculo selecionado?', respostas:
        [
            {alt: 'a', resp:"Biceps braquial"},
            {alt:'b', resp:"Triceps braquial"},
            {alt: 'c', resp:"Deltoid"},
            {alt: 'd', resp:"Extensor"}
        ]
    },
    {id: 2, pergunta:'Qual é sua principal ação?', respostas:
        [
            {alt: 'a', resp:"Flexão e Abdução"},
            {alt: 'b', resp:"Extensão e Adução"},
            {alt: 'c', resp:"Flexão, Abdução, Extensão e Rotação"},
            {alt: 'd', resp:"Extensão"}
        ]
    },
    {id: 3, pergunta:'Qual a sua origem ?', respostas:
        [
            {alt: 'a', resp:"Processo Coracóide"},
            {alt: 'b', resp:"Úmero"},
            {alt: 'c', resp:"Acrômio"},
            {alt: 'd', resp:"Epicôndilo"}
        ]    
     }
];

//Partes do corpo(Musculos)
var parteCorpo = [
    {id: 'biceps', questoes:[
        {pergunta:1, alternativa: 'a'},
        {pergunta:2, alternativa: 'a'},
        {pergunta:3, alternativa: 'a'}
    ]},
    {id: 'triceps', questoes:[
        {pergunta:1, alternativa: 'b'},
        {pergunta:2, alternativa: 'b'},
        {pergunta:3, alternativa: 'b'}
    ]},
    {id: 'extensor', questoes:[
        {pergunta:1, alternativa: 'd'},
        {pergunta:2, alternativa: 'd'},
        {pergunta:3, alternativa: 'd'}
    ]},
    {id: 'deltoid', questoes:[
        {pergunta:1, alternativa: 'c'},
        {pergunta:2, alternativa: 'c'},
        {pergunta:3, alternativa: 'c'}
    ]},
];
