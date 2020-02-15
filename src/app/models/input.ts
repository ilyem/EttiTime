import Module from './module';
import { Lesson, Attachment } from './event';

export default class FormInput {
    label?: string;
    name: string;
    type: string;
    placeholder: string
    value: string
    required?: boolean
    readonly?: boolean
};

export const loginInputs: FormInput[] = [
    {
        label: "email",
        name: "email",
        type: "text",
        placeholder: "Enter your email adress",
        value: "",
        required: true
    },
    {
        label: "password",
        name: "password",
        type: "password",
        placeholder: "Type password",
        value: "",
        required: true
    }
]
export const moduleInputs = (moduleDesc: Module["description"]): FormInput[] => {
    return [
        {
            name: "description",
            type: "text",
            placeholder: "Enter your module description",
            value: moduleDesc,
            required: true
        }]
}
export const lessonInputs = (lesson: Lesson): FormInput[] => {
    let inputs: FormInput[] = [
        {
            name: "title",
            type: "text",
            placeholder: "Enter your lesson title",
            value: lesson.title,
            required: true
        }
    ]
    if (lesson.description) {
        inputs.push({
            name: "description",
            type: "text",
            placeholder: "Enter your lesson description",
            value: lesson.description
        })
    }
    return inputs;
};
export const attachmentInputs = (attachment: Attachment): FormInput[] => {
    return [
        {
            name: "name",
            type: "text",
            placeholder: "Enter your attachment name",
            value: attachment.name,
            required: true
        },
        {
            name: "link",
            type: "text",
            placeholder: "Enter your attachment link",
            value: attachment.link,
            required: true
        }
    ]
};