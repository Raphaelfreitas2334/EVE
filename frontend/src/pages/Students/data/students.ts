export interface Student{

    id:number;

    name:string;

    course:string;

    classroom:string;

    attendance:number;

    average:number;

    status:string;

    alerts:number;

}
export const students:Student[]=[

    {
        id:1,
        name:"João Pedro Silva",
        course:"ADS",
        classroom:"ADS-2",
        attendance:94,
        average:8.7,
        status:"Ativo",
        alerts:2,
    },

    {
        id:2,
        name:"Maria Souza",
        course:"Data Science",
        classroom:"DS-1",
        attendance:98,
        average:9.5,
        status:"Excelente",
        alerts:0,
    },

    {
        id:3,
        name:"Carlos Henrique",
        course:"Administração",
        classroom:"ADM-1",
        attendance:72,
        average:6.3,
        status:"Acompanhamento",
        alerts:3,
    },

    {
        id:4,
        name:"Ana Clara",
        course:"ADS",
        classroom:"ADS-1",
        attendance:89,
        average:8.1,
        status:"Ativo",
        alerts:1,
    },

    {
        id:5,
        name:"Lucas Ferreira",
        course:"Data Science",
        classroom:"DS-2",
        attendance:61,
        average:5.8,
        status:"Em risco",
        alerts:5,
    },

    {
        id:6,
        name:"Fernanda Alves",
        course:"ADS",
        classroom:"ADS-3",
        attendance:97,
        average:9.7,
        status:"Excelente",
        alerts:0,
    },

];