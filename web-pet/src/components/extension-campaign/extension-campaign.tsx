'use client'
import { z } from 'zod'
import { ptBR } from 'date-fns/locale'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleMinus, PlusCircle } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '../ui/table'
import { DatePicker } from '../date-picker'

export type Row = {
  titulo: string
  dataInicio: Date
  dataFim: Date
}

const extensionCampaignSchema = z.object({
  prorrogacao: z.array(
    z.object({
      titulo: z.string(),
      dataInicio: z.date(),
      dataFim: z.date(),
    }),
  ),
})

type ExtensionCampaignFormData = z.infer<typeof extensionCampaignSchema>

export function ExtensionCampaign() {
  const { control, register } = useForm<ExtensionCampaignFormData>({
    resolver: zodResolver(extensionCampaignSchema),
  })
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'prorrogacao',
  })
  const handleAddRow = () => {
    append({
      titulo: 'Campanha 2024',
      dataInicio: new Date(),
      dataFim: new Date(),
    })
  }

  const handleRemoveRowSelect = (index: number) => {
    remove(index)
  }

  return (
    <Card className="w-full" x-chunk="dashboard-07-chunk-1">
      <CardHeader>
        <CardTitle>Prorrogar campanha</CardTitle>
        <CardDescription>
          Clique no botão abaixo para criar uma prorrogação
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px] hidden lg:table-cell">
                Titulo
              </TableHead>
              <TableHead>Data inicio</TableHead>
              <TableHead>Data fim</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-semibold hidden lg:table-cell">
                  {row.titulo}
                </TableCell>
                <TableCell>
                  <DatePicker
                    {...register(`prorrogacao.${index}.dataInicio`)}
                    mode="single"
                    selected={row.dataInicio}
                    onSelect={(date) =>
                      update(index, { ...row, dataInicio: date || new Date() })
                    }
                    disabled={(date) => date < new Date()}
                    locale={ptBR}
                    initialFocus
                  />
                </TableCell>
                <TableCell>
                  <DatePicker
                    {...register(`prorrogacao.${index}.dataFim`)}
                    mode="single"
                    selected={row.dataFim}
                    locale={ptBR}
                    onSelect={(date) =>
                      update(index, { ...row, dataFim: date || new Date() })
                    }
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </TableCell>
                <TableCell className="w-[100px]">
                  <Button
                    onClick={() => handleRemoveRowSelect(index)}
                    size="sm"
                    type="button"
                    variant="ghost"
                    className="gap-1"
                  >
                    <CircleMinus className="h-3.5 w-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button
          size="sm"
          variant="ghost"
          className="gap-1"
          onClick={handleAddRow}
        >
          <PlusCircle className="h-3.5 w-3.5" />
          Adicione uma prorrogação
        </Button>
      </CardFooter>
    </Card>
  )
}
