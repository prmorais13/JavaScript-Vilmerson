// Cria a classe/objeto
CalculoFinanceiro = function() {   
    
    // Método para calcular a porcentagem
    this.calculoPorcentagem = function(valor, porc) {
        return porc * valor / 100;
    };
    
    // Método que chama o método para calcular a porcentagem
    this.aoClicarCalcular = function() {
        // Leitura dos valores dos campos
        valor = document.getElementById("txtValor").value;
        porc = document.getElementById("txtPorc").value;
        
        // Invoca o método de cálculo
        r = this.calculoPorcentagem(valor, porc);
        
        // Exibe mensagem com o resultado
        window.alert("Resultado = " + r);
    };
}
    // Estancia o objeto CalculadoraFinanceiro
    cf = new CalculoFinanceiro();
