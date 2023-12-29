import Button from '@/components/Button'
import EllipsisHorizontalIcon from '@/components/icons/EllipsisHorizontal'
import PencilIcon from '@/components/icons/Pencil'
import { NextPage } from 'next'

const DocumentPage: NextPage = () => {
  return (
    <div className="w-full max-w-5xl self-center p-24">
      <header className="flex flex-row items-center justify-between">
        <p className="text-[2.6rem] font-bold">문서</p>
        <div className="flex flex-row items-center gap-x-3">
          <Button>
            <PencilIcon className="h-4 w-4" />
            수정
          </Button>
          <Button>
            <EllipsisHorizontalIcon className="h-5 w-5" />
            더보기
          </Button>
        </div>
      </header>
      <div className="py-11"></div>

      <p className="ml-3 text-3xl font-semibold">1. 개요</p>

      <p className="mt-4 text-lg leading-normal">
        형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 의원을 제명하려면 국회재적의원
        3분의 2 이상의 찬성이 있어야 한다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은
        확정되며, 대통령은 즉시 이를 공포하여야 한다. 국민의 자유와 권리는 헌법에 열거되지 아니한
        이유로 경시되지 아니한다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의 3분의 1
        이상이 아니면 대통령으로 당선될 수 없다. 환경권의 내용과 행사에 관하여는 법률로 정한다.
        국토와 자원은 국가의 보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을
        수립한다.
      </p>
    </div>
  )
}

export default DocumentPage
