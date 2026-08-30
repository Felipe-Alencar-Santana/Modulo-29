import { FormEvent, useState } from 'react'

import { FormVagasModule } from './FormVagas.module'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <>
      <FormVagasModule />
      <form className={FormVagasModule.form} onSubmit={aoEnviarForm}>
        <input
          className={FormVagasModule.campo}
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <button className={FormVagasModule.btnPesquisar} type="submit">
          Pesquisar
        </button>
      </form>
    </>
  )
}
export default FormVagas
