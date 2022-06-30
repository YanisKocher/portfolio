<template>
    <nav id="navbar" class="navbar col-md-8 col-xl-7 col-xxl-6">
        <ul class="nav nav-pills d-flex align-items-center justify-content-between w-100">
            <li v-for="(tab, i) in tabs" :key="i" class="nav-item" :class="i == 0 ? 'active' : ''" :data-menuanchor="tab.label.toLowerCase().replace(/[^A-Z0-9]/ig, '')">
                <a v-if="$windowWidth < 768" class="nav-link p-0" :href="'#' + tab.label.toLowerCase().replace(/[^A-Z0-9]/ig, '')">
                    <font-awesome-icon :icon="['fa-solid', tab.icone]" />
                    <p class="m-0" v-text="tab.label == 'Technologies' ? 'Techno\'s' : tab.label"></p>
                </a>
                <a v-else class="nav-link p-0 text-white position-relative" :href="'#' + tab.label.toLowerCase().replace(/[^A-Z0-9]/ig, '')">{{tab.label}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            tabs: [
                {
                    label: 'Hey !',
                    icone: 'hand-peace',
                },
                {
                    label: 'Technologies',
                    icone: 'code',
                },
                {
                    label: 'Parcours',
                    icone: 'briefcase',
                },
                {
                    label: 'Projets',
                    icone: 'project-diagram',
                },
                {
                    label: 'Contact',
                    icone: 'envelope',
                }
            ],
        }
    }
}
</script>