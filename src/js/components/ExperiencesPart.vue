<template>
    <div class="d-flex">
        <div class="input_container">
            <input type="range" class="form-range start-50" min="0" max="2" step="1" v-model="year_index">
        </div>
        <div class="flex-grow-1">
            <h3 class="m-0">{{data[year_index].title}}</h3>
            <p class="date">{{data[year_index].year}}</p>
            <p v-html="data[year_index].description"></p>
        </div>
    </div>
</template>

<script>
import ExperiencesDescription from '../ExperienceDescriptions';

export default {
    data() {
        return {
            data: [
                {
                    title: 'DUT MMI à l\'IUT d\'Haguenau',
                    year: '2019 - 2021',
                    description: ExperiencesDescription.DUT
                },
                {
                    title: 'Licence Pro DWEB à l\'IUT d\'Haguenau',
                    year: '2021 - 2022',
                    description: ExperiencesDescription.LPDWEB
                },
                {
                    title: 'Digicom Corporation',
                    year: 'Depuis 2020',
                    description: ExperiencesDescription.Digicom
                }
            ],
            year_index: 0,
        }
    },

    mounted() {
        let text_container = document.querySelector('#parcours .flex-grow-1');

        this.setMinHeight(text_container);
        window.addEventListener('resize', this.setMinHeight(text_container));
    },

    methods: {
        setMinHeight(div) {
            div.style.minHeight = div.offsetHeight + 'px';
        }
    }
}
</script>