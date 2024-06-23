<script setup lang="ts">
import {ref} from 'vue'

//counter
const counter = ref<number>(120)
const value = ref(null)
const ClickOnOff = ref(false)

const decimalDetect = ( event: Event ) => {

}
const changeNumberValue = ( num: number, event?: Event ) => {
  counter.value = num
}

const toggleNumberValue = ( num: number ) => {
  ClickOnOff.value = !ClickOnOff.value
}

const menu2 = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
]);

const items2 = ref([
            {
                label: 'Refresh',
                // icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                // icon: 'pi pi-upload'
            }
        ]);

const toggle = (event : Event) => {
    // console.log(menu.value.toggle(event))
    menu2.value.toggle(event);


const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
};

// import { useRouter } from 'vue-router';

// const router = useRouter();

const items3 = ref([
    {
        label: 'Router Link',
        icon: 'pi pi-palette',
        route: '/theming/unstyled'
    },
    {
        label: 'Programmatic',
        icon: 'pi pi-link',
        // command: () => {
        //     router.push('/introduction');
        // }
    },
    {
        label: 'External',
        icon: 'pi pi-home',
        url: 'https://vuejs.org/'
    }
]);

const menu3 = ref()
const toggleSelect = (event : Event) => {
    // console.log(menu.value.toggle(event))
    menu2.value.toggle(event);
};

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const toggleSelector = () => {
  (document.getElementById('Selectors') as HTMLElement).click()
}

</script>

<template>
  <div class="card flex">
    <div class="text-input" id="div-text-input1">
      <p>{{ counter.toFixed(1) }}</p>
      <FloatLabel>
          <InputText id="username" v-model="value" />
          <!-- <label for="username">CountInput</label> -->
      </FloatLabel>
    </div>
  </div>
  <div class="card flex justify-center">
    <Button @click="changeNumberValue(60)" :disabled="ClickOnOff" label="Click 60" icon="pi pi-check" />
    <Button @click="changeNumberValue(120)" label="Click 120" icon="pi pi-check" />
    <Button @click="toggleNumberValue(30)" label="disabled" icon="pi pi-check" />
  </div>
  <div class="card flex justify-center">
        <button id="button1" icon="pi pi-ellipsis-v" @click="toggleSelector" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu2" id="overlay_menu" style="position: absolute; top: 105px; background-color: black; color: white" :model="items2" :popup="true" />
  </div>

  <div class="card flex justify-center">
        <Menu :model="items3">
            <template #item="{ item, props }">
                <!-- <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link> -->
                <a v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>


    <div class="card flex justify-center">
        <Select v-model="selectedCity" style="text-align:center;" id="Selectors" aria-hidden="false" :options="cities" optionLabel="name" placeholder="Select a City" checkmark :highlightOnSelect="false" class="md:w-56 appearance:none;" />
    </div>
</template>

<style scoped>
/* Button {
  background-color: black;
  border: 2px solid gray;
} */

/* .div {
  width: 1024px;
} */

#button1 {
  height: 14px;
  width: 14px;
  border: 1px solid blue;
  border-radius:5px;
}

#select1 {
  border: 1px solid black;
}

/* #Selectors {
  display: none;
} */


/*
{
  position: absolute; top:150px; left:522.5px;
  transform-origin: center top;
  margin-top: var(--p-anchor-gutter);
  z-index: 1001;
}
*/

</style>
<style>
#Selectors > .p-select-label {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
#Selectors > .p-select-dropdown {
  display: none;
}

/* Tailwind CSS: popup(overlay)は全体の親の<div>と並行して作られるっぽいのでこうなる。*/
#app ~ .p-select-overlay {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>
