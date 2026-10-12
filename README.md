# Calculadora Super Simples (calculadora-simples)

Uma calculadora super simples, estilo R\$1,99, implementada com Framework Quasar.

**Não funcionar ainda, apenas leiaute.**

## Atalhos de teclado

A calculadora também pode ser usada pelo teclado:

| Tecla                    | Ação                                       |
| ------------------------ | ------------------------------------------ |
| `0`–`9`                  | Digita o número                            |
| `.` ou `,`               | Separador decimal                          |
| `Enter`                  | Confirmar entrada                          |
| `+` `-` `*` `/`          | Adição, subtração, multiplicação e divisão |
| `^`                      | Potência (x^y)                             |
| `Backspace`              | Remover último dígito / número da pilha    |
| `S`                      | Inverter os dois últimos números da pilha  |
| `Delete` ou `Esc`        | Limpar toda a pilha                        |

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

---

By [@ebdonato](https://www.linkedin.com/in/ebdonato/)

---

Conforme for digitando, os dígitos serão armazenados em um item temporário.
Quando pressiona-se OK, o item é armazenado no array que guarda a pilha.
Se pressionar OK e não estando em modo inserção, o último item é duplicado.
