<template>
    <nav id="navbar" class="navbar col-6">
        <ul class="nav nav-pills d-flex align-items-center justify-content-between w-100">
            <li v-for="(label, i) in labels" :key="i" class="nav-item">
                <a class="nav-link p-0 text-white" :href="'#' + label.toLowerCase().replace(/[^A-Z0-9]/ig, '')">{{label}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            labels: [
                'Hey !',
                'Parcours',
                'Technologies',
                'Projets',
                'Contacts'
            ],
        }
    },

    created() {
        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            this.changeNavLinkColor(window.scrollY < window.innerHeight);
        },

        changeNavLinkColor(firstSection) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                firstSection ? link.classList.add('text-white') : link.classList.remove('text-white');
            });
        }
    }
}
</script>