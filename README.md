<h1 align='center'>:koala: Cowala Assessment</h1>

<p align='center'>
	<a href='#about'>About</a> &nbsp; | &nbsp; <a href='#technologies'>Technologies</a> &nbsp; | &nbsp; <a href='#how-to-use'>How to use</a> &nbsp; | &nbsp; <a href='#routes-tables'>Routes tables</a>
</p>

<h2 id='about'>:memo: About</h2>
<p>This repository was made to store the Cowala Challenges. These challenges are part of a selection process for a job opportunity.</p>
<p>I preferred to use a light organization just for readability.</p>
<p>The specific code for the challenges is in the <a href='https://github.com/k1vz/teste-cowala/tree/master/src/services'>services</a>.</p>

<h2 id='technologies'>:hammer_and_wrench: Technologies</h2>
<div>
	<img align="center" alt="TypeScript" title="TypeScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
	<img align="center" alt="NodeJS" title="NodeJS" height="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
	<img align="center" alt="Insomnia" title="Insomnia" height="30" src="https://dashboard.snapcraft.io/site_media/appmedia/2018/04/twitter-card-icon.png" />
	<img align="center" alt="ExpressJS" title="ExpressJS" height="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" />
</div>
<br>

<h2 id='how-to-use'>:rocket: How to use</h2>

<h4>Pre-requisites:</h4>
<ul>
	<li>:white_check_mark: NodeJS >= 17.3.0</li>
	<li>:white_check_mark: Yarn >= 1.22.15</li>
	<li>:white_check_mark: Git >= 2.31.1</li>
</ul>

<h4>Running</h4>

Clone the project repository
```
git clone https://github.com/k1vz/teste-cowala.git
```

Access project folder
```
cd teste-cowala
```

Install all dependecies
```
yarn
```

Run in develop mode (fastest way)
```
yarn dev
```

<h2 id='routes-tables'>:evergreen_tree: Routes tables</h2>
	
<h3>Algorithms</h3>
	
Request | Method | Route URI | Body | Response
--- | --- | --- | --- | ---
Fibonnaci <br> (fibonnaci.js) | POST | /algoritmos/fibonnaci | { <br> "num": number <br> } | number[]
Classifier <br> (classificador.js) | POST | /algoritmos/classificador | { <br> "souEu": boolean, <br> "responsavel": boolean, <br> "nome": string <br> } | string[]
Cleaner <br> (faxina.js) | POST | /algoritmos/faxina |  { <br> string: string <br> OR <br> string: null <br> } | { <br> string: string <br> }
Check Vality <br> (validade.js) | POST | /algoritmos/validade | { <br> "date": Date, <br> "vality": string <br> } | boolean
Create Frame <br> (moldura.js) | POST | /algoritmos/moldura | { <br> "height": number, <br> "width": number <br> } | ---
	
	
<h3>Back-end</h3>
	
Request | Method | Belongs to | Route URI | Body | Response
--- | --- | --- | --- | --- | ---
Create item in list | POST | Mercado | /back-end/mercado/create | { <br> "id": number, <br> "item": string, <br> "preco": number <br> } | "Status 200: Done!"
Read all items | GET | Mercado | /back-end/mercado/readAllItems | --- | [ <br> &nbsp; { <br> &nbsp; "id": number, <br> &nbsp; "item": string, <br> &nbsp; "preco": number <br> &nbsp; } <br> ]
Read only | POST | Mercado | /back-end/mercado/readOnly | { <br> "id": number <br> } | { <br> "id": number, <br> "item": string, <br> "preco": number <br> }
Update price | POST | Mercado | /back-end/mercado/update | { <br> "id": number, <br> "preco": number <br> } | "Status 200: Done!"
Delete item | POST | Mercado | /back-end/mercado/delete | { <br> "id": number <br> } | "Status 200: Done!"
--- | --- | --- | --- | --- | ---
Create conversion | POST | Conversão <br> de Moedas | /back-end/conversao/create | { <br> "id": number, <br> "moedaOriginal": string, <br> "moedaDeConversao": string, "valorEnviado": number <br> } | { <br> "id": number, <br> "moedaOriginal": string, <br> "moedaDeConversao": string, <br> "valorEnviado": number, <br> "valorConvertido": number <br> }
Read all items | GET | Conversão <br> de Moedas | /back-end/mercado/readAllItems | --- | [ <br> &nbsp; { <br> &nbsp; "id": number, <br> &nbsp; "moedaOriginal": string, <br> &nbsp; "moedaDeConversao": string, <br> &nbsp; "valorEnviado": number, <br> &nbsp; "valorConvertido": number <br> &nbsp; } <br> ]
Read only one item | POST | Conversão <br> de Moedas | /back-end/conversao/readOnly | { <br> "id": number <br> } | { <br> "id": number, <br> "moedaOriginal": string, <br> "moedaDeConversao": string, <br> "valorEnviado": number, <br> "valorConvertido": number <br> }
Delete item | POST | Conversão <br> de Moedas | /back-end/conversao/delete | { <br> "id": number <br> } | "Status 200: Done!"
