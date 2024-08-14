import { FormLogin } from '@/components/form-login'

export default function Login() {
  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <div className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Autenticação</h1>
            <p className="text-balance text-muted-foreground">
              Insira suas credenciais abaixo para fazer entrar em sua conta
            </p>
          </div>
          <FormLogin />
        </div>
      </div>
    </div>
  )
}
