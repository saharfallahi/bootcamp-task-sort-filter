const notesList = [
{
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
},
{
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
},
{
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
},
{
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
},
];

function filterStatus(data,status){
    switch (status) {
        case "all":
            return data;
        case "completed":
            return data.filter((n)=> n.completed);
        case "uncompleted":
            return data.filter((n)=> !n.completed);
    }
}

function searchData(data,filter){
    return data.filter((note)=>note.title.toLowerCase().includes(filter.trim().toLowerCase()));
}

function sortData(data,sortBy){
    if(sortBy==="asce"){
        return [...data].sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
    }else if(sortBy==="desc"){
        return [...data].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    }
}


function queryData(data,{sortBy,filter,status}){
    let filteredData;
    filteredData=searchData(data,filter);
    filteredData=filterStatus(filteredData,status);
    filteredData=sortData(filteredData,sortBy);

    return filteredData;
}


console.log(queryData(notesList,{filter:"co",sortBy:"asce",status:"all"}));
