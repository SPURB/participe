<template>
  <div id="teste-table">
    <comments
      :attr="{id:16, context:'Quadros'}"
    />
    <comments-loader
      :attr="{id:16, context:'Quadros'}"
    />
    <tabela-csv
      :titulo="`Titulo 01`"
      :colunas="['PIU', 'Iniciativa', 'Teste']"
      :linhas="[
        ['Conteúdo da célula A1', 'Conteúdo da célula B1', 'Conteúdo da célula B3'],
        ['Conteúdo da célula A2', 'Conteúdo da célula B2', 'Conteúdo da célula B3'],
        ['Células A3-B3', 'Células A3-B3', 'Células A3-B4'],
        ['Células A4-B4', 'Células A4-B4']
      ]"
    />
  </div>
</template>

<script>
import TabelaCsv from '@/components/TabelaCsv'
import Comments from '@/components/Comments'
import CommentsLoader from '@/components/CommentsLoader'
export default {
	components: {
		TabelaCsv,
		Comments,
		CommentsLoader
	}
}
</script>

<style lang="scss" scoped>
#teste-table {
  margin-top: 150px;
  width: 100%;
}
</style>
