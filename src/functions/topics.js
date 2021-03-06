import json_data from "../template/json_data";

export const getTopicsLabels = () => {
    // TODO get request for labels
    return new Promise( resolve => {
        resolve([{_id: 0, name: "Тригонометрия начало"}])
    })
}

export const getTopic = (topic_id) => {
    // TODO get request for topic by ID
    return new Promise((async resolve => {
        resolve(json_data[topic_id])
    }))
}