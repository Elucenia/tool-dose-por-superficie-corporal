# Dose por superfície corporal (mg/m²)

Identificador: `dose-por-superficie-corporal`. Pacote independente da plataforma ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **restricted**. O conversor permite teto de superfície corporal 2,0 m² e arredondamentos terapêuticos sem protocolo obrigatório. ASCO 2021 atualiza a referência de 2012 e mantém doses citotóxicas pelo peso real em adultos obesos. Suspender prescrição derivada até contexto farmacológico e revisão.
- Execução: **desativada; o adaptador retorna REVIEW_REQUIRED**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- 4 casos de referência em `examples.json`, conferidos por `test.cjs`. Verificação aritmética independente da fórmula (reimplementação a partir da literatura, entradas aleatórias): **pendente**.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Relação dimensional: dose total (mg) = dose prescrita (mg/m²) × superfície corporal (m²). Este registro não determina prescrição, reduções, tetos ou arredondamento.

A transcrição acima documenta o acervo de origem e pode requerer atualização. Revisão documental: https://ascopubs.org/doi/abs/10.1200/JCO.21.00471

## Condições e limites

Calcula a dose total de um quimioterápico ou outro fármaco prescrito por superfície corporal, a partir do peso e da altura.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Mosteller RD. Simplified calculation of body-surface area. N Engl J Med, 1987.](https://doi.org/10.1056/NEJM198710223171717)
- [Du Bois D, Du Bois EF. Clinical calorimetry: a formula to estimate the approximate surface area if height and weight be known. Arch Intern Med, 1916.](https://doi.org/10.1001/archinte.1916.00080130010002)
- [Griggs JJ et al. Appropriate chemotherapy dosing for obese adult patients with cancer: American Society of Clinical Oncology clinical practice guideline. J Clin Oncol, 2012.](https://doi.org/10.1200/JCO.2011.39.9436)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## O que esta ferramenta não faz

- Não diagnostica, não prescreve e não substitui a avaliação de um médico. O resultado é a reprodução técnica de uma fórmula ou escore publicado.
- Não envia dados a lugar nenhum: roda no navegador ou no Node.js, sem rede, sem telemetria, sem armazenamento.
- Não guarda nem identifica pacientes. Não use com dados identificáveis fora de um ambiente que você controla.
- Não tem validação clínica independente nem aprovação regulatória (ver "Situação").

## Autoria e licença

Criado e mantido por **Felipe Guedes** (Engenheiro de Software e Arquiteto de Sistemas, Toledo, Paraná, Brasil) para a **ELUCENIA**, uma cadeia médica e científica global para acelerar a descoberta. Criado em 2026-09-25 na organização [github.com/Elucenia](https://github.com/Elucenia).

Licença **Apache-2.0** (arquivo `LICENSE`): você pode usar, copiar, modificar e embutir este código no seu site ou sistema, inclusive comercial, desde que mantenha o arquivo `NOTICE` e o aviso de copyright e declare as modificações. A licença cobre o código deste pacote; instrumentos, questionários, tabelas, traduções e marcas citados nas fontes mantêm os direitos dos seus titulares (ver `NOTICE`). Detalhes em `AUTHORSHIP.md`, `CITATION.cff`, `SECURITY.md` e `CONTRIBUTING.md`. Contato: contato@elucenia.org.
