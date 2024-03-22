import { Button, Input, Textarea } from "@nextui-org/react";
import {
  EnvelopeSimple,
  Heart,
  Key,
  LockKey,
  LockKeyOpen,
  ShieldWarning,
} from "@phosphor-icons/react";
import React, { useState } from "react";

const CifraCesar: React.FC = () => {
  const [mensagemOriginal, setMensagemOriginal] = useState<string>("");
  const [chaveCifra, setChaveCifra] = useState<number>(3);
  const [mensagemCifrada, setMensagemCifrada] = useState<string>("");

  const alfabeto: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?! ";

  const cifrarCesar = (mensagem: string, chave: number): string => {
    let resultado: string = "";
    for (let i = 0; i < mensagem.length; i++) {
      const caractere: string = mensagem[i];
      if (caractere === " ") {
        resultado += " "; // mantém espaços inalterados
      } else {
        const indice: number = alfabeto.indexOf(caractere);
        if (indice !== -1) {
          const novoIndice: number = (indice + chave) % alfabeto.length;
          resultado += alfabeto[novoIndice];
        } else {
          resultado += caractere;
        }
      }
    }
    return resultado;
  };

  const decifrarCesar = (mensagemCifrada: string, chave: number): string => {
    return cifrarCesar(mensagemCifrada, -chave);
  };

  const bruteForceCesar = (mensagemCifrada: string): void => {
    const resultados: string[] = [];
    for (let chave = 0; chave < alfabeto.length; chave++) {
      const tentativa: string = decifrarCesar(mensagemCifrada, chave);
      if (tentativa.indexOf("undefined") === -1) {
        resultados.push(`Chave ${chave}: ${tentativa}`);
      }
    }
    const alertMessage = resultados.join("\n");
    alert(alertMessage);
  };

  const handleCifrar = (): void => {
    const resultadoCifra: string = cifrarCesar(mensagemOriginal, chaveCifra);
    setMensagemCifrada(resultadoCifra);
    alert(`Mensagem Cifrada: \n${resultadoCifra}`);
  };

  const handleDecifrar = (): void => {
    const resultadoDecifra: string = decifrarCesar(mensagemCifrada, chaveCifra);
    alert(`Mensagem Decifrada: \n${resultadoDecifra}`);
  };

  const handleZerar = (): void => {
    setMensagemOriginal("");
    setChaveCifra(3);
    setMensagemCifrada("");
  };

  return (
    <div className="flex min-h-svh w-svw flex-col items-center justify-between bg-[url('./background.jpg')] bg-cover bg-center bg-no-repeat px-4">
      <header className="flex w-screen text-xl font-bold items-center justify-center gap-1 bg-black/50 p-4 text-neutral-50">
        <Key weight="fill" />
        <h1 className="silkscreen">Cifra de César</h1>
      </header>

      <main className="flex w-full flex-col gap-2 rounded-xl border-2 border-white/40 bg-gradient-to-b from-white/40 to-white/20 p-4 shadow-2xl md:max-w-md">
        <Textarea
          type="text"
          value={mensagemOriginal}
          onChange={(e) => setMensagemOriginal(e.target.value)}
          placeholder="mensagem"
          description={
            <p className="text-neutral-50">
              Insira a mensagem para ser cifrada ou decifrada
            </p>
          }
          startContent={<EnvelopeSimple />}
        />
        <Input
          type="text"
          value={chaveCifra.toString()}
          onChange={(e) => setChaveCifra(parseInt(e.target.value, 10))}
          placeholder="chave da cifra"
          description={
            <p className="text-neutral-50">
              Valor da chave para cifrar ou decifrar
            </p>
          }
          startContent={<Key />}
        />
        <div className="flex gap-2">
          <Button
            className="flex-1"
            color="primary"
            startContent={<LockKey weight="fill" />}
            onPress={handleCifrar}
          >
            <p className="silkscreen">Cifrar</p>
            </Button>
          <Button
            className="flex-1"
            color="primary"
            startContent={<LockKeyOpen weight="fill" />}
            onClick={handleDecifrar}
          >
            <p className="silkscreen">Decifrar</p>
          </Button>
        </div>
        <Button
          color="warning"
          startContent={<ShieldWarning weight="fill" />}
          onClick={() => bruteForceCesar(mensagemCifrada)}
        >
          <p className="silkscreen">Brute Force</p>
        </Button>

        <Button
          className="text-neutral-50"
          color="default"
          variant="light"
          onPress={handleZerar}
        >
          <p className="silkscreen">Zerar</p>
        </Button>
      </main>

      <footer className="flex w-screen items-center justify-center bg-black/50 p-4">
        <div className="flex items-center gap-1 text-xs text-neutral-50">
          <p>Made with</p>
          <Heart className="text-red-500" weight="fill" />
          <p>by</p>
          <a href="https://github.com/murilodestefani" target="_blank">
            @murilodestefani
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CifraCesar;
