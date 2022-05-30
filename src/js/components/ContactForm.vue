<template>
    <form action="" class="row g-3">
        <div class="form-floating col-12 col-md-6">
            <input type="text" class="form-control" id="lastname" placeholder="Nom">
            <label for="lastname">Nom</label>
        </div>
        <div class="form-floating col-12 col-md-6">
            <input type="text" class="form-control" id="firstname" placeholder="Prénom">
            <label for="firstname">Prénom</label>
        </div>

        <div class="form-floating">
            <input type="email" class="form-control" id="email" placeholder="contact@yaniskocher.fr">
            <label for="email">Adresse email</label>
        </div>

        <div class="form-floating">
            <input type="text" class="form-control" id="subject" placeholder="Sujet">
            <label for="subject">Sujet</label>
        </div>

        <div class="form-floating">
            <textarea class="form-control" placeholder="Ecrivez votre message..." id="message"></textarea>
            <label for="message">Ecrivez votre message...</label>
        </div>

        <div class="col-12">
            <button type="submit" class="btn btn-primary text-white fw-bold">Envoyer</button>
        </div>
    </form>
</template>

<script>
export default {

}
</script>