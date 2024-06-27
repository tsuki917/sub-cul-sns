import { UserContext } from "@/app/providers";
import axios, { AxiosResponse } from "axios";
import React, { Dispatch, FormEvent, SetStateAction, useContext, useEffect, useMemo, useRef, useState } from "react";
import CancelIcon from "../Icons/CancelIcon";
import { Button, Image, Input } from "@nextui-org/react";

export default function AddPost({ set }: { set: Dispatch<SetStateAction<boolean>> }) {
    const [content, setContent] = useState<string>();
    const { user } = useContext(UserContext);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFiles, setImageFiles] = useState<FileList | null>(null);
    const selectedFileArray: File[] = useMemo(() => {
        return imageFiles ? [...Array.from(imageFiles)] : [];
    }, [imageFiles]);

    useEffect(() => {
        if (!user) {

        }
    })

    const onAddPost = (event: FormEvent<HTMLFormElement>) => {
        console.log("addpost")
        event.preventDefault();
        let url = "http://localhost:8080/createpost";
        const formData = new FormData()
        console.log(content)
        console.log(user)
        if (content !== undefined && user?.id !== undefined) {
            formData.append("Content", content)
            formData.append("UserId", user?.id.toString())
        } else {
            return
        }
        selectedFileArray.forEach((file, index) => {
            formData.append("image[" + index + "]", file)
        })
        formData.append("FileLength", selectedFileArray.length.toString())
        axios.post(url, formData).then((res: AxiosResponse) => {
            console.log(res)
            setContent("")
            set(prev => !prev)
        }).catch((e) => {
            console.log(e)
        })
    }

    // const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file: File | undefined = e.target?.files?.[0];
    //     if (!file) return
    //     setImageFile(file)
    //     setFileURL(window.URL.createObjectURL(file))
    //     console.log(window.URL.createObjectURL(file))
    //     // const reader = new FileReader();
    //     // reader.readAsDataURL(file);;
    //     // reader.onload = () => {
    //     //     setImageFile(reader.result)
    //     //     console.log(reader.result)
    //     // }
    // }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        if (!fileInputRef.current?.files) return;
        const newFileArray = [
            ...selectedFileArray,
            ...Array.from(e.target.files),
        ].filter(
            (file, index, self) =>
                self.findIndex((f) => f.name === file.name) === index // 重複を削除
        );
        const dt = new DataTransfer();
        newFileArray.forEach((file) => dt.items.add(file));
        fileInputRef.current.files = dt.files; // input内のFileListを更新
        setImageFiles(dt.files); // Reactのstateを更新
    };

    const handleDelete = (index: number) => {
        console.log("handle")
        if (!fileInputRef.current?.files) return;
        const dt = new DataTransfer();
        selectedFileArray.forEach((file, i) => i !== index && dt.items.add(file));
        fileInputRef.current.files = dt.files; // input内のFileListを更新
        setImageFiles(dt.files); // Reactのstateを更新
    };

    return (
        <div className="border-1 relative">
            <form onSubmit={onAddPost}>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ">
                    <div className="px-2 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" onChange={(e) => setContent(e.target.value)} rows={10} className="w-full p-2 text-sm border-none text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 border-transparent outline-none focus:border-transparent" placeholder="Write a comment..." required></textarea>
                    </div>
                    {selectedFileArray.length > 0 && (
                        <div className="flex flex-row gap-3 p-3">
                            {selectedFileArray.map((ele, key) => {
                                const img_src = window.URL.createObjectURL(ele)
                                return (
                                    <div key={key} className={`h-20 relative border-red-500 `}>
                                        <Image alt={`submitImg-${key}`} src={img_src} className="h-20" />
                                        <button type="button" className="bg-red-500 absolute -top-1  -right-1 w-4 h-4 z-50 rounded-full before:w-3 before:h-0.5 before:bg-white before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2  before:rotate-45 after:w-0.5 after:h-3 after:bg-white after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45" onClick={() => handleDelete(key)} />
                                    </div>
                                )
                            })}


                        </div>
                    )}
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post comment
                        </button>
                        <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">

                            {/* <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"> */}

                            <Input type="file" id="fileInput" multiple className="hidden" ref={fileInputRef} accept="image/png,image/jpeg"
                                onChange={handleChange} />
                            <button type="button">
                                <label htmlFor="fileInput" className=" cursor-pointer">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                    </svg>
                                </label>
                            </button>
                            {/* <span className="sr-only">Upload image</span> */}
                            {/* </button> */}
                        </div>
                    </div>
                </div>
            </form >
            <div className="fixed top-96 right-3 z-20">
                <CancelIcon onClick={() => set((prev) => !prev)} />
            </div>
        </div >
        // <form action="post" onSubmit={onAddPost} classNameName="border-1">
        //     <label> content : </label>
        //     <Input
        //         type="text"
        //         name="content"
        //         value={content}
        //         onChange={(e) => setContent(e.target.value)}
        //     />
        //     <Button type="submit">Submit</Button>
        // </form>
    );

}
