# Deploy do Portfolio 3D no VPS com Portainer e Traefik

## Pré-requisitos

- VPS com Docker e Docker Compose instalados
- Portainer configurado
- Traefik configurado como proxy reverso
- Domínio configurado e apontando para o VPS

## Configuração do Traefik

Certifique-se de que o Traefik está configurado com a rede `traefik-public`. Se não estiver, crie-a:

```bash
docker network create traefik-public
```

## Configuração do Domínio

1. Edite o arquivo `docker-compose.yml`
2. Substitua `seu-dominio.com` pelo seu domínio real
3. Exemplo:
   ```yaml
   - "traefik.http.routers.portfolio.rule=Host(`meuportfolio.com`) || Host(`www.meuportfolio.com`)"
   ```

## Deploy via Portainer

### Método 1: Stack no Portainer

1. Acesse o Portainer
2. Vá em "Stacks" → "Add stack"
3. Nome: `portfolio-3d`
4. Cole o conteúdo do `docker-compose.yml`
5. Clique em "Deploy the stack"

### Método 2: Upload via Git

1. Faça push do código para um repositório Git
2. No Portainer, vá em "Stacks" → "Add stack"
3. Selecione "Repository"
4. Configure:
   - Repository URL: `https://github.com/seu-usuario/portifolio-3d.git`
   - Repository reference: `main` (ou sua branch)
   - Compose path: `docker-compose.yml`
5. Clique em "Deploy the stack"

## Verificação

1. Acesse `https://seu-dominio.com`
2. Verifique se o certificado SSL está funcionando
3. Teste o health check: `https://seu-dominio.com/api/health`

## Logs e Monitoramento

### Ver logs no Portainer:
1. Vá em "Containers"
2. Clique no container `portfolio-3d-app`
3. Vá na aba "Logs"

### Ver logs via CLI:
```bash
docker logs portfolio-3d-app
```

## Atualizações

Para atualizar a aplicação:

1. Faça push das mudanças para o Git
2. No Portainer, vá em "Stacks"
3. Clique em "Update" na stack `portfolio-3d`
4. Ou use o botão "Pull and redeploy"

## Troubleshooting

### Container não inicia:
```bash
docker logs portfolio-3d-app
```

### Problemas de rede:
```bash
docker network ls
docker network inspect traefik-public
```

### Rebuild completo:
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Variáveis de Ambiente

Se precisar configurar variáveis de ambiente, adicione no `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
  - NEXT_PUBLIC_API_URL=https://api.seu-dominio.com
```

## Backup

Para fazer backup da aplicação:

```bash
# Backup do código
git clone https://github.com/seu-usuario/portifolio-3d.git

# Backup das configurações
docker-compose config > backup-config.yml
```

## Segurança

- O container roda como usuário não-root
- Headers de segurança configurados no Traefik
- HTTPS obrigatório
- Health checks configurados 