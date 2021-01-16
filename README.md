# Recuperação de senha

**Requisito Funcional**

- O usuário deve recuparar a sua senha informando seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar a senha;

**Requisito Não Funcional**

- Utilizar Mailrap para testar os envios de email em ambiente de desenvolvimento;
- Utilizar amozon SES para envios em produção
- O envio de emails deve ocorrer em segundo plano (background job);

**Regra de Negócio**

- O link enviado por email para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**Requisito Funcional**

- O usuário deve poder atualizar seu email, nome e senha;

**Requisito Não Funcional**

**Regra de Negócio**

- O usuário não pode atualizar seu email para um email já utilizado;
- Para atualizar a senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do Mentor

**Requisito Funcional**

- O mentor deve poder listar seus agendamentos de um dia específico;
- O mentor deve receber uma notifição sempre que houver um novo agendamento;
- O mentor deve poder visualizar as notificações não lidas;

**Requisito Não Funcional**

- Os agendamentos do mentor no dia devem ser armazenados em cache;
- As notificações devem ser salvas no mongoDB;
- As notificações devem ser enviadas em tempo real via Socket.io;

**Regra de Negócio**

- A notificação deve ter um status de lida e não lida;

# Painel do Aluno

**Requisito Funcional**

- O Aluno deve poder listar todos mentores cadastrados;

**Requisito Não Funcional**

- A listagem dos mentores deve ser armazena em cache

**Regra de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h e 18h (primeiro às 8h, último às 17h);
- O aluno não pode agendar mentoria em um horário já ocupado;
- O aluno não pode agendar mentores em um horário que já passou;
