import { PencilSimple, Trash } from "phosphor-react";

interface IIncoming {
    value: number;
    date: string;
    description?: string;
}

type IncomingDTO = {
    data: IIncoming,
    type?: 'general' | 'singular'
}

export function TRIncoming({ data, type }: IncomingDTO) {

    const { value, date, description } = data;

    return (
        <tr className="border-b border-b-gray-200">
            <td className="text-sm p-3 text-center font-semibold text-zinc-700">{value}</td>
            {type == "singular" && (
                <td className="text-sm p-3 text-center font-semibold text-zinc-700">{description ?? 'Valor do taxe diario'}</td>
            )}
            <td className="text-sm p-3 text-center font-semibold text-zinc-700">{date}</td>
            <td>
                <div className="flex gap-3">
                    <span className="cursor-pointer text-blue-600 hover:text-blue-900 transition duration-500">
                        <PencilSimple />
                    </span>
                    <span className="cursor-pointer text-red-700 hover:text-red-900 transition duration-500">
                        <Trash />
                    </span>
                </div>
            </td>
        </tr>
    )
}