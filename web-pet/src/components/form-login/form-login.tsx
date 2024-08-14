import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

export function FormLogin() {
  return (
    <form className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="usuario">Usuario</Label>
        <Input
          id="usuario"
          type="usuario"
          placeholder="Insira seu usuário"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" placeholder="*******" required />
      </div>
      <Button type="submit" className="w-full">
        Entrar
      </Button>
    </form>
  )
}
