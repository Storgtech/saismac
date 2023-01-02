import { FaTimes } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

export type AskingConfirmationProps = {
    id?: string;
    closeState: any;
    execute: any;
    label?: string;
}

export const AskingConfirmation = (
    { closeState, execute, id, label }: AskingConfirmationProps) => {

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(1,1,1,.7)] flex items-center justify-center">
            <div className="bg-white w-1/4 p-8 rounded-xl shadow-2xl">
                <p className="text-gray-900 font-bold text-xl">{label || 'Deseja concluir esta ação?'}</p>
                <div className="flex justify-end pt-2">
                    <button
                        type="button"
                        className="flex justify-center items-center gap-1 py-1 px-2 text-green-600"
                        onClick={() => closeState(false)}><span><FaTimes /></span>não</button>
                    <button
                        type="button"
                        className="flex justify-center items-center gap-1 py-1 px-2 text-red-600"
                        onClick={() => {
                            closeState(false)
                            execute(id)
                        }}><span><FiCheck /></span>sim</button>
                </div>
            </div>
        </div>
    )

}