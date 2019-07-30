<template>
    <div class="login-box">
        <a-form
            class="login-form"
            :form="form"
            @submit="handleSubmit">

            <a-row :gutter="24">
                <div class="login-welcome">
                    <img src="../../assets/images/loginLogo.jpg">
                    <p>欢迎来到Kisure Vue</p>
                </div>
            </a-row>

            <a-row :gutter="24">
                <a-col :span="24">
                    <a-form-item>
                        <a-input type='text' placeholder="请输入账号">
                            <a-icon
                                slot="prefix"
                                type="user"
                                style="color: rgba(0,0,0,.25)"
                                />
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item>
                        <a-input type='password' placeholder="请输入密码">
                            <a-icon
                                slot="prefix"
                                type="lock"
                                style="color: rgba(0,0,0,.25)"
                                />
                        </a-input>
                    </a-form-item>
                </a-col>
            </a-row>

            <a-row :gutter="24">
                <a-col :span="24">
                    <a-checkbox
                        v-decorator="['remember',{
                            valuePropName: 'checked',
                            initialValue: true,
                        }]">
                        Remember me
                    </a-checkbox>
                    <a 
                        class="login-form-forgot"
                        href="">
                        Forgot password
                    </a>
                    <a-button
                        type="primary"
                        html-type="submit"
                        class="login-form-button">
                        Log in
                    </a-button>
                    Or <a href="">
                        register now!
                    </a>
                </a-col>
            </a-row>

        </a-form>
    </div>
</template>
<script>
import { layoutConfig } from './index.config';
export default {
    data() {
        return {
            layoutConfig,
            form: {}
        };
    },
    methods: {
        handleSubmit() {

        }
    }
}
</script>
<style lang="sass">
    @import './index.scss';
</style>
