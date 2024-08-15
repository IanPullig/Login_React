import { FormLogin } from '@/components/form-login'
import { PawPrint } from 'lucide-react'

export default function Login() {
  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <div className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex items-center justify-center gap-3 ">
              <div className="rounded-full bg-primary h-9 w-9 grid justify-center items-center text-primary-foreground">
                <PawPrint className="h-4 w-4 transition-all group-hover:scale-110" />
              </div>
              <h1 className="text-3xl font-bold">e-CamPet</h1>
            </div>
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
