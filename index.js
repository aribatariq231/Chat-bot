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
    "contents": [
      {
        "parts": [
          {
            text: `User query: ${query}`,
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