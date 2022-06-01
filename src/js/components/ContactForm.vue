<template>
    <form action="" class="row g-3" @submit.prevent="submit">
        <div class="form-floating col-12 col-md-6">
            <input 
                type="text" 
                id="lastname"
                class="form-control" 
                :class="isValid('lastname')" 
                placeholder="Nom" 
                v-model="form.lastname"
            >
            <label for="lastname">Nom</label>
            <p class="invalid-feedback mb-0">{{errors.lastname}}</p>
        </div>
        <div class="form-floating col-12 col-md-6">
            <input 
                type="text" 
                id="firstname" 
                class="form-control" 
                :class="isValid('firstname')" 
                placeholder="Prénom" 
                v-model="form.firstname"
            >
            <label for="firstname">Prénom</label>
            <p class="invalid-feedback mb-0">{{errors.firstname}}</p>
        </div>

        <div class="form-floating">
            <input 
                type="email" 
                id="email" 
                class="form-control" 
                :class="isValid('email')" 
                placeholder="contact@yaniskocher.fr" 
                v-model="form.email"
                @input="verificationEmail"
            >
            <label for="email">Adresse email</label>
            <p class="invalid-feedback mb-0">{{errors.email}}</p>
        </div>

        <div class="form-floating">
            <input 
                type="text" 
                id="subject" 
                class="form-control" 
                :class="isValid('subject')" 
                placeholder="Sujet" 
                v-model="form.subject"
                @input="verificationSubject"
            >
            <label for="subject">Sujet</label>
            <p class="invalid-feedback mb-0">{{errors.subject}}</p>
        </div>

        <div class="form-floating">
            <textarea 
                id="message" 
                class="form-control" 
                :class="isValid('message')" 
                placeholder="Ecrivez votre message..." 
                v-model="form.message"
                @input="verificationMessage"
            ></textarea>
            <label for="message">Ecrivez votre message...</label>
            <p class="invalid-feedback mb-0">{{errors.message}}</p>
        </div>

        <vue-recaptcha sitekey="6LcA5jEgAAAAAB6zMPA0Y8T0CkKkmMOS3lbhQPcH"></vue-recaptcha>

        <div class="col-12">
            <button type="submit" class="btn btn-primary text-white fw-bold">Envoyer</button>
        </div>
    </form>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';

export default {
    components: { 
        VueRecaptcha 
    },

    data() {
        return {
            form: {
                lastname: '',
                firstname: '',
                email: '',
                subject: '',
                message: ''
            },
            errors: {
                lastname: '',
                firstname: '',
                email: '',
                subject: '',
                message: ''
            } 
        }
    },

    methods: {
        submit() {
            for (const key in this.form) {
                if(this.form[key] === '') {
                    this.errors[key] = 'Ce champ est obligatoire';
                }
            }
        },

        isValid(label) {
            if(this.form[label] !== '' && this.errors[label] === '') return 'is-valid';
            else if(this.errors[label] !== '') return 'is-invalid';
        },

        verificationEmail() {
            if(this.form.email !== '' && !this.form.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                this.errors.email = 'Votre adresse email n\'est pas valide';
            } 
            else this.errors.email = '';
        },

        verificationSubject() {
            if(this.form.subject !== '' && this.form.subject.length < 3) {
                this.errors.subject = 'Votre sujet doit contenir au moins 3 caractères';
            }
            else this.errors.subject = '';
        },

        verificationMessage() {
            if(this.form.message !== '' && this.form.message.length < 10) {
                this.errors.message = 'Votre message doit contenir au moins 10 caractères';
            }
            else this.errors.message = '';
        }
    }
}
</script>