<template>
  <div id="table-csv">
    <table>
      <caption>{{ titulo }}</caption>
      <thead>
        <tr>
          <th
            scope="col"
            :key="index"
            v-for="(col, index) in colunas">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="`tr-`+index" v-for="(item, index) in totalLinhas">
          <td
            :data-label="colunas[indexLinha]"
            :key="`td-`+indexLinha"
            :colspan="countColspan(linhasValues[index].length, totalColunas)"
            v-for="(linha, indexLinha) in linhasValues[index]"
          >
            {{ linha }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable indent */
export default {
  name: 'TabelaCsv',
  props: {
    titulo: {
      type: String,
      required: true
    },
    colunas: {
      type: Array,
      required: true
    },
    linhas: {
      type: Array,
      required: true
    }
  },
  computed: {
    linhasValues () {
      let linhas = this.linhas
      linhas.forEach((linha, index) => {
        linhas[index] = [...new Set(linha)]
      })
      return linhas
    },
    totalColunas () {
      return this.colunas.length
    },
    totalLinhas () {
      return this.linhas.length
    }
  },
  methods: {
    countColspan (linha, total) {
      if (linha === 1) return total
      if (linha < total) return linha
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';
#table-csv {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  table {
    border-collapse: collapse;
    background-color: #FFF;
    margin: 0;
    width: 90%;

    caption {
      font-size: 1.5rem;
      margin-bottom: 3px;
    }

    th, td {
      border: 1px solid $cinza-2;
      color: $preto;
      font-size: smaller;
      padding: 4px 8px;
      position: relative;
    }

    thead tr th {
      background-color: $cinza-3;
    }
  }
}
@media screen and (max-width: 600px) {
  table {
    box-sizing: border-box;

    caption {
      font-size: 1.3em;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      display: block;
      margin-bottom: .625em;
      box-shadow: 0px 2px 2px 2px $sombra-4;
      cursor: pointer;
    }

    td {
      border-top: none !important;
      border-right: none !important;
      border-left: none !important;
      border-bottom: 1px solid #ddd !important;
      display: block;
      font-size: .8em;
      text-align: right;

      &::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        color: $cinza-1;
        text-transform: uppercase;
      }
    }
  }
}
</style>
