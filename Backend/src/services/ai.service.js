const {GoogleGenAI}=require ("@google/genai")

const ai=new GoogleGenAI({
    apiKey:process.env.GOOGLE_GENAI_API_KEY
})

async function invokeGeminiai(){
    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:"Hello gemini ! Explain what is Interview?"
    })

    console.log(response.text)
}

module.exports=invokeGeminiai