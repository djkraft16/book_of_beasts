import React, { useState } from 'react';
import './App.css';

const API_KEY = "sk-proj-1O57TOSCNlDDlWIo5Yi5T3BlbkFJGwnxlx06M6eduTrUPrc1";

function App() {
	const [prompt, setPrompt] = useState("");
	const [response, setResponse] = useState("");

	async function callOpenAI() {
		console.log("Calling the OpenAI API...");

		const APIBody = {
			"model": "gpt-4o",
			"prompt": "Give me fully completed, detailed Dungeons and Dragons character sheet based on the following information:\n" + prompt,
			"temperature": 0,
			"max_tokens": 64,
			"top_p": 1,
			"frequency_penalty": 0.0,
			"presence_penalty": 0.0
		}

		await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + API_KEY
			},
			body: JSON.stringify(APIBody)
		}).then((data) => {
			return data.json();
		}).then((data) => {
			console.log(data);
		});
	}

	console.log(prompt);
	return (
		<div className="App">
			<h1>OpenAI GPT-4 Text Generator</h1>
			<textarea
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				rows={10}
				cols={50}
				placeholder="Enter "
			/>
			<div>
				<button onClick={callOpenAI}>Generate Text</button>
				{prompt != "" ?
					<h3>Answer: {response}</h3>
                    :
					null
				}
			</div>
		</div>
	);
}

export default App;
