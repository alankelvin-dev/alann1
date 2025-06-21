// JavaScript para o Sistema de Gerenciamento de Produtos

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização da aplicação
    initializeApp();
});

function initializeApp() {
    // Configurar tooltips do Bootstrap
    initializeTooltips();
    
    // Configurar validação de formulários
    initializeFormValidation();
    
    // Configurar formatação de campos
    initializeFieldFormatting();
    
    // Configurar confirmações de exclusão
    initializeDeleteConfirmations();
    
    // Configurar auto-dismiss para alertas
    initializeAlertAutoDismiss();
    
    // Configurar animações
    initializeAnimations();
}

// Inicializar tooltips do Bootstrap
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Validação de formulários
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                
                // Focar no primeiro campo inválido
                const firstInvalidField = form.querySelector(':invalid');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                    firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
            
            form.classList.add('was-validated');
        });
    });
    
    // Validação em tempo real para campos específicos
    const nomeField = document.getElementById('nome');
    if (nomeField) {
        nomeField.addEventListener('input', function() {
            validateNomeField(this);
        });
    }
    
    const precoField = document.getElementById('preco');
    if (precoField) {
        precoField.addEventListener('input', function() {
            validatePrecoField(this);
        });
    }
    
    const estoqueField = document.getElementById('quantidadeEstoque');
    if (estoqueField) {
        estoqueField.addEventListener('input', function() {
            validateEstoqueField(this);
        });
    }
}

// Validação do campo nome
function validateNomeField(field) {
    const value = field.value.trim();
    const feedback = field.parentNode.querySelector('.invalid-feedback') || createFeedbackElement(field);
    
    if (value.length < 2) {
        field.setCustomValidity('O nome deve ter pelo menos 2 caracteres');
        feedback.textContent = 'O nome deve ter pelo menos 2 caracteres';
    } else if (value.length > 100) {
        field.setCustomValidity('O nome não pode ter mais de 100 caracteres');
        feedback.textContent = 'O nome não pode ter mais de 100 caracteres';
    } else {
        field.setCustomValidity('');
        feedback.textContent = '';
    }
}

// Validação do campo preço
function validatePrecoField(field) {
    const value = parseFloat(field.value);
    const feedback = field.parentNode.querySelector('.invalid-feedback') || createFeedbackElement(field.parentNode);
    
    if (isNaN(value) || value <= 0) {
        field.setCustomValidity('O preço deve ser um valor positivo');
        feedback.textContent = 'O preço deve ser um valor positivo';
    } else if (value > 999999.99) {
        field.setCustomValidity('O preço não pode ser maior que R$ 999.999,99');
        feedback.textContent = 'O preço não pode ser maior que R$ 999.999,99';
    } else {
        field.setCustomValidity('');
        feedback.textContent = '';
    }
}

// Validação do campo estoque
function validateEstoqueField(field) {
    const value = parseInt(field.value);
    const feedback = field.parentNode.querySelector('.invalid-feedback') || createFeedbackElement(field);
    
    if (isNaN(value) || value < 0) {
        field.setCustomValidity('A quantidade deve ser um número não negativo');
        feedback.textContent = 'A quantidade deve ser um número não negativo';
    } else if (value > 999999) {
        field.setCustomValidity('A quantidade não pode ser maior que 999.999');
        feedback.textContent = 'A quantidade não pode ser maior que 999.999';
    } else {
        field.setCustomValidity('');
        feedback.textContent = '';
    }
}

// Criar elemento de feedback
function createFeedbackElement(parent) {
    const feedback = document.createElement('div');
    feedback.className = 'invalid-feedback';
    parent.appendChild(feedback);
    return feedback;
}

// Formatação de campos
function initializeFieldFormatting() {
    // Formatação do campo de preço
    const precoField = document.getElementById('preco');
    if (precoField) {
        precoField.addEventListener('blur', function() {
            const value = parseFloat(this.value);
            if (!isNaN(value)) {
                this.value = value.toFixed(2);
            }
        });
    }
    
    // Formatação automática de campos de texto (capitalização)
    const textFields = document.querySelectorAll('input[type="text"]:not(#preco)');
    textFields.forEach(function(field) {
        if (field.id === 'nome') {
            field.addEventListener('input', function() {
                // Capitalizar primeira letra de cada palavra
                this.value = this.value.replace(/\b\w/g, function(char) {
                    return char.toUpperCase();
                });
            });
        }
    });
}

// Confirmações de exclusão
function initializeDeleteConfirmations() {
    const deleteForms = document.querySelectorAll('form[action*="DELETE"]');
    
    deleteForms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Criar modal de confirmação personalizado
            showDeleteConfirmation(function() {
                form.submit();
            });
        });
    });
}

// Mostrar confirmação de exclusão personalizada
function showDeleteConfirmation(callback) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        Confirmar Exclusão
                    </h5>
                </div>
                <div class="modal-body">
                    <p class="mb-3">
                        <i class="fas fa-trash me-2 text-danger"></i>
                        Tem certeza que deseja excluir este produto?
                    </p>
                    <div class="alert alert-warning">
                        <i class="fas fa-info-circle me-2"></i>
                        Esta ação não pode ser desfeita!
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="fas fa-times me-2"></i>
                        Cancelar
                    </button>
                    <button type="button" class="btn btn-danger" id="confirmDelete">
                        <i class="fas fa-trash me-2"></i>
                        Excluir Produto
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    // Configurar botão de confirmação
    modal.querySelector('#confirmDelete').addEventListener('click', function() {
        bootstrapModal.hide();
        callback();
    });
    
    // Remover modal do DOM após fechar
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

// Auto-dismiss para alertas
function initializeAlertAutoDismiss() {
    const alerts = document.querySelectorAll('.alert:not(.alert-info)');
    
    alerts.forEach(function(alert) {
        // Auto-dismiss após 5 segundos
        setTimeout(function() {
            const bsAlert = new bootstrap.Alert(alert);
            if (bsAlert) {
                bsAlert.close();
            }
        }, 5000);
    });
}

// Animações
function initializeAnimations() {
    // Animação de entrada para cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
        card.style.animationDelay = (index * 0.1) + 's';
    });
    
    // Animação suave para botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Scroll suave para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Utilitários
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}

// Função para mostrar notificações toast
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle me-2"></i>
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    const bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();
    
    // Remover toast após ser ocultado
    toast.addEventListener('hidden.bs.toast', function() {
        toastContainer.removeChild(toast);
    });
}

// Criar container para toasts
function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = '1055';
    document.body.appendChild(container);
    return container;
}

// Função para loading states
function setLoadingState(element, loading = true) {
    if (loading) {
        element.disabled = true;
        element.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Carregando...';
    } else {
        element.disabled = false;
        // Restaurar texto original (deve ser implementado conforme necessário)
    }
}

// Exportar funções para uso global
window.ProdutosApp = {
    showToast,
    setLoadingState,
    formatCurrency,
    formatDate
};

