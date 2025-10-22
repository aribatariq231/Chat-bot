function getQueryquestion() {
    // alert("I'm run");
    try {
        // const ap = 24;
        // ap = 33;
        // console.log("Run Successfully");
        const inputRef = document.querySelector("#query");
        const query = inputRef.value;
        const res = axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
    contents: [
      {
        parts: [
          {
            text: `you are an expert in graphic designing, having years of knowledge..you have to ans the user query as per  your knowlege if query is not from web development domain error than refused to answer.
            `,
          },
          {
            text: `User query: ${query}
            maximum 100 hunderd answer.`
            ,
          }
        ]
      }
    ]
  },
            {
                headers:{
                    "content-Type":"application/json",
                    "x-goog-api-key":"AIzaSyBzKJouwCrEGTeaQC3RzH335Gl-_dUifNA",
                },
            }

        );
        res
            .then((data) => {
                // console.log(data.data);
                const answerRef = document.querySelector("#answer");
                answerRef.textContent = data.data.candidates[0].content.parts[0].text;
            })
            .catch((error) => {
                // console.log(error);
                alert("error");
            });
    }
    catch (err) {
        alert("Something went wrong");
    }
}