!!!
!!!
    !!!         IGNORE ESTE ARQUIVO         !!!
!!!
!!!
!!!

Este PR adiciona o sistema de input.

Decisões:
- Eventos são normalizados
- Nenhum acesso direto ao Game Loop

Pendências:
- Falta suporte a gamepad


Título: Sistema de Áudio – API inicial

Descrição:
Precisamos definir as funções do módulo de áudio.

Proposta:
- load(id, url)
- play(id)
- stop(id)

Aceitação:
- Não pode acessar Render
- Deve ser independente


/docs/decisions.md

/Arquivo de decisoes
//## 2026-01-12 – Sistema de Áudio
Decidido usar API simples sem dependências externas.
Motivo: facilitar portabilidade.



Como fica o fluxo real (exemplo)
Dev A (você – online agora)

Cria Issue: “Definir API de Áudio”

Escreve proposta

Faz commit inicial

Abre PR

Dev B (entra 6h depois)

Lê Issue

Comenta no PR

Sugere mudança

Dev C (entra no dia seguinte)

Lê tudo

Aprova ou ajusta

Atualiza documentação

🚫 Nenhum chat ao vivo
✅ Tudo registrado