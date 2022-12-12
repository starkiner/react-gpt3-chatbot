const defaultSettings = {
    "STARTING_PROMPT": "A conversation between two people.",
    "STARTING_REQUEST": "Say something!",
    "MAX_NUM_USER_INPUTS": 100000,
    "USER_PREFIX": "",
    "AI_PREFIX": "",
    "CUT_DIALOGUE_PLACEHOLDER": "...",
    "FREQUENCY_PENALTY": 0.95,
    "PRESENCE_PENALTY": 0.95,
    "TEMPERATURE": 0.95,
    "MAX_TOKENS": 500,
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
