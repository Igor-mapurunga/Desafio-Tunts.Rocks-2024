fetch('https://script.googleusercontent.com/macros/echo?user_content_key=dP_PvCvjzh7y1VkdvcXj08mQxisyOjqQmreECt2G1gLlUveQvavRltWJqNR0XCmMcTX9Wqj6v8Njn_gbVZEPYfEWpR9yXdb-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG6mm0ZQNVSKQDihy2wIDuvBEs5gka4F4Zm_j4cn4o_YPcaMPfjLutofSjwymn2a36sG0DOpODcxBEnxh72Vsimj5dspMlKJUdz9Jw9Md8uu&lib=Mq9dKPhTsZmfaarnrf2AKQkMybHC2Fyw9')
    .then(response => {
        return response.json();
    })
    .then(data => {

        console.log(data);


        data.outPut.forEach(aluno => {
            const p1 = aluno.P1;
            const p2 = aluno.P2;
            const p3 = aluno.P3;
            const average = Math.round((p1 + p2 + p3) / 3)
            let status;
            let missedClasses = aluno.Faltas;
            let naf = 0;


            if (average < 50) {
                status = "Reprovado por Nota";
            } else if (missedClasses > 15) {
                status = "Reprovado por falta";
            } else if (average >= 50 && average < 70) {
                status = "Exame final";
                naf = average - 5 / 2;
            } else {
                status = "Aprovado"

            }



            console.log('Nome do Aluno :', aluno.Aluno, '/' + ' Faltas: ' + aluno.Faltas + ' / ' + ' Média:', average, '/' + 'Situação: ' + status + ' / ' + 'Nota para aprovação final:' + naf);
        });
    })
    .catch(error => {
        console.error('Erro ao obter dados:', error);
    });
