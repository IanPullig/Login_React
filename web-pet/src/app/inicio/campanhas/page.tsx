import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

export default function Campaigns() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-4">
      <div className="grid gap-4">
        <Link href="/inicio/campanhas/cadastro" className="ml-auto">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Cadastrar campanha
            </span>
          </Button>
        </Link>
        <Card>
          <CardHeader>
            <CardTitle>Campanhas</CardTitle>
            <CardDescription>Gerencie suas campanhas.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </main>
  )
}
