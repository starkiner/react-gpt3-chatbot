const defaultSettings = {
    "STARTING_PROMPT": "A conversation between two people.",
    "STARTING_REQUEST": "Say something!",
    "MAX_NUM_USER_INPUTS": 1000,
    "USER_PREFIX": "",
    "AI_PREFIX": "",
    "CUT_DIALOGUE_PLACEHOLDER": "...",
    "FREQUENCY_PENALTY": 1,
    "PRESENCE_PENALTY": 1,
    "MAX_TOKENS": 40960,
    "LANGUAGE": ""
}

const spanishSettings = 
{
    "STARTING_PROMPT": "Una conversación entre una mujer y un hombre.",
    "STARTING_REQUEST": "Habla!",
    "USER_PREFIX": "M: ",
    "AI_PREFIX": "H:",
    "LANGUAGE": "Spanish"
}

//export

export default defaultSettings;
