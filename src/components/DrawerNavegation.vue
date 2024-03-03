<template>
    <div>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
        <v-app-bar color="primary" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>My files</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon="mdi-magnify" variant="text"></v-btn>

            <v-btn icon="mdi-filter" variant="text"></v-btn>

            <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left" temporary>
            <template v-slot:prepend>
                <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                    subtitle="Logged in" title="Jane Smith"></v-list-item>
            </template>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/" RouterLink></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account" to="/about"
                    RouterLink></v-list-item>
                <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            </v-list>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
interface Item {
    title: string;
    value: string;
}
const items: Item[] = [
    { title: 'Foo', value: 'foo' },
    { title: 'Bar', value: 'bar' },
    { title: 'fizz', value: 'fizz' },
    { title: 'buzz', value: 'buzz' }
];

const drawer = ref(false);
const group = ref<string | null>(null);

const closeDrawer = () => {
    drawer.value = false;
};

watch(group, (val, oldVal) => {
    if (val !== oldVal) {
        drawer.value = false;
    }
});
</script>