<script setup>
import { computed, ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import CardBoxModal from '@/components/CardBoxModal.vue'
import TableCheckboxCell from '@/components/TableCheckboxCell.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
// import UserAvatar from '@/components/UserAvatar.vue'

defineProps({
  checkable: Boolean
})

const mainStore = useMainStore()

const items = computed(() => mainStore.clients)
console.log("items",items)

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const perPage = ref(5)

const currentPage = ref(0)

const checkedRows = ref([])

const itemsPaginated = computed(() =>
  items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, (row) => row.id_cliente === client.id_cliente)
  }
}
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <!-- <th /> -->
        <th>Nombre</th>
        <th>Codigo</th>
        <th>Correo</th>
        <th>Recepcion</th>
        <th>Movil</th>
        <th>telefono 1</th>
        <th>telefono 2</th>
        <th>Grupo</th>
        <th>Proyecto</th>
        <th>Estado</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id_cliente">
        <TableCheckboxCell v-if="checkable" @checked="checked($event, client)" />
        <td data-label="Nombre">
          {{ client.nombre_sn }}
          <!-- <UserAvatar :username="client.name" class="w-24 h-24 mx-auto lg:w-6 lg:h-6" /> -->
        </td>
        <td data-label="Codigo">
          {{ client.codigo_sn }}
        </td>
        <td data-label="Correo">
          {{ client.correo_electronico }}
        </td>
        <td data-label="Recepcion">
          {{ client.correo_recepcion }}
        </td>

        <td data-label="Movil">
          {{ client.telefono_movil }}
        </td>

        <td data-label="telefono 1">
          {{ client.telefono_1 }}
        </td>

        <td data-label="telefono 2">
          {{ client.telefono_2 }}
        </td>

        <td data-label="Grupo">
          {{ client.nombre_grupo }}
        </td>

        <td data-label="Proyecto">
          {{ client.codigo_proyecto }}
        </td>

        <td data-label="Estado">
          {{ client.estado_encuesta }}
        </td>
        <!-- <td data-label="Progress" class="lg:w-32">
          <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="client.progress">
            {{ client.progress }}
          </progress>
        </td> -->

        <!-- <td data-label="Created" class="lg:w-1 whitespace-nowrap">
          <small class="text-gray-500 dark:text-slate-400" :title="client.created">{{
            client.created
          }}</small>
        </td> -->

        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton color="info" :icon="mdiEye" small @click="isModalActive = true" />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDangerActive = true"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
