Para novos controllers, a semântica é clara:  
 @Setor(TypeSetor.Farmacia) // todo o setor  
 farmácia
@Cargo(TypeRoles.Separador) // só separadores  
 @Cargo(TypeRoles.Administrador) // só admin  
 @Setor(TypeSetor.Farmacia) // todo o setor
farmácia
@Cargo(TypeRoles.Separador) // só separadores
@Cargo(TypeRoles.Administrador) // só admin

- @Roles(TypeRoles.Administrador) → @Cargo(TypeRoles.Administrador)
- Corrigido o bug do CME que referenciava TypeRoles.Administrativo (não existia no enum)

Para novos controllers, a semântica é clara:
@Setor(TypeSetor.Farmacia) // todo o setor farmácia
@Cargo(TypeRoles.Separador) // só separadores
@Cargo(TypeRoles.Administrador) // só admin

● Os tipos já aceitam array. Basta passar como array:

// Vários setores — user precisa pertencer a QUALQUER um
@Setor([TypeSetor.Farmacia, TypeSetor.CME])

// Vários cargos — user precisa ser QUALQUER um
@Cargo([TypeRoles.Separador, TypeRoles.Almoxarifado])

// Combinar os dois — user satisfaz @Cargo OU @Setor (OR entre decorators)
@Setor(TypeSetor.Almoxarifado)
@Cargo(TypeRoles.Farmacia)

O guard lê os dois metadata keys independentemente e retorna true se qualquer um satisfaz — a lógica já está  
 implementada assim:

// guard verifica @Cargo e depois @Setor, um return true em qualquer um libera
if (requiredCargos) { ... if match → return true }
if (requiredSetores) { ... if match → return true }
throw ForbiddenException

A única limitação atual é que não dá para combinar dois @Cargo na mesma rota (o segundo sobrescreve o primeiro, pois
usam a mesma chave). Se precisar disso, basta passar como array: @Cargo([TypeRoles.X, TypeRoles.Y]).


  // Qualquer usuário logado
  @Autenticado()
  findAll() { ... }

  // Só cargos específicos (implicitamente logado)
  @Cargo(TypeCargo.Separador)
  findOne() { ... }

  // Todo o setor (implicitamente logado)
  @Setor(TypeSetor.Farmacia)
  create() { ... }

  // Sem decorator → rota pública (sem JWT)
  healthCheck() { ... }