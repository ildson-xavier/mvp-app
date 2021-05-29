import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  displayedColumns2: string[] = [
  'sup',
  'vend',
  'codTime',
	'ordem',
	'dia',
	'semana',
	'contrato',
	'nasPalheiro',
	'camelRyo',
	'kitEstrategico',
	'rebaixa',
	'kitFocoCamel',
	'baseRyoOcb',
	'pesquisa',
	'hierarquia',
	'nomeCliente',
	'endereco',
  'mediaTriUlt3Meses',
  'vendaMaio',
	'objetivoTtMaio',
	'lacunaMes',
	'jTi',
	'isqueiro'
  ]
  displayedColumns =
  ['sup',
	'vend',
	'codTime',
	'ordem',
	'dia',
	'semana',
	'contrato',
	'nasPalheiro',
	'camelRyo',
	'kitEstrategico',
	'rebaixa',
	'kitFocoCamel',
	'baseRyoOcb',
	'pesquisa',
	'hierarquia',
	'nomeCliente',
	'endereco',
	'mediaTriUlt3Meses',
	'vendaMaio',
	'objetivoTtMaio',
	'lacunaMes',
	'jTi',
	'isqueiro',
	'cb',
	'cbSoft',
	'cy',
	'cySoft',
	'cdp',
	'cdg',
	'cdr',
	'cryo',
	'ck',
	'wb',
	'wbSoft',
	'wcSoft',
	'ws',
	'wr',
	'wbs',
	'we',
	'wp',
	'wbld',
	'djbm',
	'djb',
	'lam',
	'nas',
	'nasp',
	'pueb',
	'inadim',
	'cidade']
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    console.log('')
  }

  setColor(date): string {
    let day = date.split('/')
    if (parseInt (day) > 23) {
      return 'cell-selected-green'
    } else if (parseInt (day) < 23) {
      return 'cell-selected-red'
    } else if (parseInt (day) == 23){
      return 'cell-selected-yellow'
    } else {
      return ' '
    }
  }

  getTotalMedia() {
    return ELEMENT_DATA.map(e => e.mediaTriUlt3Meses).reduce((acc, value) => acc + value, 0)
  }

  getTotalVendaMaio() {
    return ELEMENT_DATA.map(e => e.vendaMaio).reduce((acc, value) => acc + value, 0)
  }

  getTotalObjetivoMaio() {
    return ELEMENT_DATA.map(e => e.objetivoTtMaio).reduce((acc, value) => acc + value, 0)
  }

  getTotalLacunaMes() {
    return ELEMENT_DATA.map(e => e.lacunaMes).reduce((acc, value) => acc + value, 0)
  }

  getTotalJti() {
    return ELEMENT_DATA.map(e => e.jTi).reduce((acc, value) => acc + value, 0)
  }

  getTotalIsqueiro() {
    return ELEMENT_DATA.map(e => e.isqueiro).reduce((acc, value) => acc + value, 0)
  }

}

export interface BatalhaNaval {
	sup: string;
	vend: string;
	codTime: string;
	ordem: number;
	dia: string;
	semana: string;
	contrato: string;
	nasPalheiro: string;
	camelRyo: string;
	kitEstrategico: string;
	rebaixa: string;
	kitFocoCamel: string;
	baseRyoOcb: string;
	pesquisa: string;
	hierarquia: string;
	nomeCliente: string;
	endereco: string;
	mediaTriUlt3Meses: number;
	vendaMaio: number;
	objetivoTtMaio: number;
	lacunaMes: number;
	jTi: number;
	isqueiro: number;
	cb: string;
	cbSoft: string;
	cy: string;
	cySoft: string;
	cdp: string;
	cdg: string;
	cdr: string;
	cryo: string;
	ck: string;
	wb: string;
	wbSoft: string;
	wcSoft: string;
	ws: string;
	wr: string;
	wbs: string;
	we: string;
	wp: string;
	wbld: string;
	djbm: string;
	djb: string;
	lam: string;
	nas: string;
	nasp: string;
	pueb: string;
	inadim: string;
	cidade: string;
}

const ELEMENT_DATA: BatalhaNaval[] = [
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: '22/5', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: '22/5', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: '22/5', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: '22/5', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: '23/5', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '21/5', cbSoft: '25/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: '22/5', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: '22/5', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '21/5', cbSoft: '21/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: '22/5', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: '22/5', pueb: ' ', inadim: ' ', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: 'X', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '21/5', cbSoft: '24/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '28/5', cdr: ' ', cryo: '22/5', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: '22/5', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: '22/5', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: '25/5', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '26/5', cbSoft: '28/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: '22/5', wcSoft: ' ', ws: '22/5', wr: ' ', wbs: ' ', we: '22/5', wp: ' ', wbld: ' ', djbm: ' ', djb: '22/5', lam: '22/5', nas: ' ', nasp: ' ', pueb: '22/5', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '27/5', cbSoft: '21/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: '22/5', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: ' ', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '28/5', cbSoft: '21/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '29/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: ' ', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '29/5', cbSoft: '21/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: '22/5', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: '28/5', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: 'X', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '21/5', cbSoft: '21/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: '22/5', wcSoft: ' ', ws: '22/5', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: ' ', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '21/5', cbSoft: '21/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: '22/5', djbm: ' ', djb: ' ', lam: '23/5', nas: '22/5', nasp: ' ', pueb: '22/5', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '21/5', cbSoft: '21/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: ' ', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '23/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: ' ', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: '23/5', cbSoft: '24/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: ' ', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: ' ', cbSoft: '25/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: ' ', cbSoft: '26/5', cy: ' ', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: ' ', cbSoft: '27/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '22/5', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'},
  {sup: 'ADOLPHO MONTEIRO', vend: 'ARMANDO AMERICO DOS SANTOS JUNIOR', codTime: 'CT0000047225', ordem: 1, dia: '2 F', semana: 'A', contrato: ' ', nasPalheiro: ' ', camelRyo: 'X', kitEstrategico: ' ', rebaixa: 'X', kitFocoCamel: ' ', baseRyoOcb: 'X', pesquisa: 'Baixa', hierarquia: 'BAR/ LANCHONETE/ CAFETERIA', nomeCliente: 'JOSE CARLOS SERGIO DE MELO', endereco: 'AV 17 DE AGOSTO S/N - RECIFE', mediaTriUlt3Meses: 11.4, vendaMaio: 4.2, objetivoTtMaio: 8.3, lacunaMes: 9.4, jTi: 0.2, isqueiro: 2.1, cb: ' ', cbSoft: '28/5', cy: '21/5', cySoft: '23/5', cdp: '21/5', cdg: '', cdr: ' ', cryo: ' ', ck: ' ', wb: ' ', wbSoft: ' ', wcSoft: ' ', ws: ' ', wr: ' ', wbs: ' ', we: ' ', wp: ' ', wbld: ' ', djbm: ' ', djb: ' ', lam: ' ', nas: ' ', nasp: ' ', pueb: ' ', inadim: 'X', cidade: 'Itaqua'}
];
