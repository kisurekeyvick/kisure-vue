export const layoutConfig = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 }
};

export const decorator = {
    userName: [
        'userName',
        { rules: [{ required: true, message: 'Please input your username!' }] }
    ],
    password: [
        'password',
        { rules: [{ required: true, message: 'Please input your Password!' }] }
    ]
};