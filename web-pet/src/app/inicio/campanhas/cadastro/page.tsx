import { BackButton } from '@/components/back-button'
import { ExtensionCampaign } from '@/components/extension-campaign'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function Register() {
  const currentYear = new Date().getFullYear()
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-7xl flex-1 auto-rows-max gap-4">
        <BackButton label="Controle de campanhas" />
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_650px_250px] lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Detalhes da campanha</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid w-full items-center gap-3 md:flex">
                    <Input
                      label="Titulo"
                      disabled
                      defaultValue={`Camapnha - ${currentYear}`}
                    />
                    <Input label="Ano" disabled defaultValue={currentYear} />
                  </div>
                  <div className="grid w-full items-center gap-3 md:flex">
                    <Textarea
                      label="Descrição"
                      placeholder="digite a descrição da campanha"
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
            <ExtensionCampaign />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Status da campanha</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Status">
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Ativo</SelectItem>
                        <SelectItem value="published">Cancelado</SelectItem>
                        <SelectItem value="archived">Arquivado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
