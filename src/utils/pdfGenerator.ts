import { jsPDF } from 'jspdf';
import { allChapters } from '../data/curriculumData';
import { curriculumQuestions } from '../data/questionsData';

export function generateColdWarPDF(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  const drawPageHeader = () => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(1, 110, 1); // Green #016E01
    doc.text('ESCOLA PARQUE IPIRANGA • 9º ANO • HISTÓRIA • PROF. ANDERSON FIRMO', margin, 9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('Guia Oficial Completo: A5 a B8', pageWidth - margin - 45, 9);
    doc.setDrawColor(1, 110, 1);
    doc.setLineWidth(0.3);
    doc.line(margin, 11, pageWidth - margin, 11);
  };

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 14) {
      doc.addPage();
      y = 15;
      drawPageHeader();
    }
  };

  const drawSectionHeader = (title: string, subtitle?: string) => {
    checkPageBreak(16);
    doc.setFillColor(1, 110, 1);
    doc.roundedRect(margin, y, contentWidth, 7, 1.5, 1.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text(title.toUpperCase(), margin + 3, y + 4.8);

    if (subtitle) {
      doc.setFontSize(7.5);
      doc.setTextColor(201, 168, 76); // Gold #C9A84C
      doc.text(subtitle, pageWidth - margin - 3, y + 4.8, { align: 'right' });
    }
    y += 10;
  };

  // =========================================================
  // CAPA & CABEÇALHO OFICIAL (PÁGINA 1)
  // =========================================================
  doc.setDrawColor(1, 110, 1);
  doc.setLineWidth(0.8);
  doc.rect(margin, y, contentWidth, 40, 'S');

  doc.setFont('times', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(1, 110, 1);
  doc.text('ESCOLA PARQUE IPIRANGA', pageWidth / 2, y + 7, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(1, 110, 1);
  doc.text('9º ANO DO ENSINO FUNDAMENTAL II • DISCIPLINA DE HISTÓRIA', pageWidth / 2, y + 12, { align: 'center' });

  // Orange Pill Docente
  doc.setFillColor(253, 118, 0); // #FD7600
  doc.roundedRect(pageWidth / 2 - 45, y + 14.5, 90, 5.5, 2.5, 2.5, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('DOCENTE RESPONSÁVEL: PROF. ANDERSON FIRMO', pageWidth / 2, y + 18.2, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(1, 110, 1);
  doc.text('GUIA DE ESTUDOS INTEGRAL: DA GUERRA FRIA À NOVA REPÚBLICA (A5 A B8)', pageWidth / 2, y + 25, { align: 'center' });

  doc.setFont('times', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Estrutura Curricular Cronológica • Analogias • Mapas Mentais • Banco de Questões BNCC', pageWidth / 2, y + 29, { align: 'center' });

  // Student identification fields
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text('NOME DO ESTUDANTE: _____________________________________________  TURMA: 9º ___  DATA: ___/___/2026', margin + 3, y + 36);

  y += 45;

  // =========================================================
  // SUMÁRIO DOS 8 MÓDULOS (ORDEM DO ANEXO & CRONOLÓGICA)
  // =========================================================
  drawSectionHeader('Estrutura dos 8 Módulos Oficiais (Ementa Completa)', '1945 – Atualidade');

  allChapters.forEach((ch, idx) => {
    checkPageBreak(9);
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.roundedRect(margin, y, contentWidth, 7, 1, 1, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(1, 110, 1);
    doc.text(`[${ch.code}]`, margin + 2, y + 4.8);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(`${ch.title} (${ch.period})`, margin + 14, y + 4.8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(`${ch.topics.length} subtópicos`, pageWidth - margin - 3, y + 4.8, { align: 'right' });

    y += 8;
  });

  y += 4;

  // =========================================================
  // DETALHAMENTO DE CADA MÓDULO (A5 A B8)
  // =========================================================
  allChapters.forEach((ch) => {
    checkPageBreak(30);
    drawSectionHeader(`Módulo ${ch.code}: ${ch.title}`, ch.period);

    // Overview box
    doc.setFillColor(254, 243, 199); // Light amber
    doc.roundedRect(margin, y, contentWidth, 12, 1.5, 1.5, 'F');
    doc.setDrawColor(253, 118, 0);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, contentWidth, 12, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(180, 83, 9);
    doc.text(`TEMA CENTRAL: ${ch.theme.toUpperCase()}`, margin + 3, y + 4);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(30, 41, 59);
    const overviewLines = doc.splitTextToSize(ch.overview, contentWidth - 6);
    doc.text(overviewLines.slice(0, 2), margin + 3, y + 8);
    y += 15;

    // Subtopics
    ch.topics.forEach((top, tIdx) => {
      checkPageBreak(16);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(1, 110, 1);
      doc.text(`${tIdx + 1}. ${top.title} (${top.period})`, margin + 2, y + 3.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(51, 65, 85);
      const sumLines = doc.splitTextToSize(top.summary, contentWidth - 4);
      doc.text(sumLines.slice(0, 2), margin + 2, y + 7.5);

      // Exam Bizu
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(6.5);
      doc.setTextColor(180, 83, 9);
      doc.text(`* Bizu Prof. Anderson: ${top.examBizu}`, margin + 2, y + 12);

      y += 15;
    });

    // Analogy for Chapter
    checkPageBreak(12);
    doc.setFillColor(240, 253, 244); // Light green
    doc.roundedRect(margin, y, contentWidth, 10, 1.5, 1.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(1, 110, 1);
    doc.text(`💡 METÁFORA DIDÁTICA: ${ch.analogy.title}`, margin + 3, y + 4);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6.5);
    doc.setTextColor(51, 65, 85);
    const quoteLines = doc.splitTextToSize(`"${ch.analogy.quote}" - ${ch.analogy.explanation}`, contentWidth - 6);
    doc.text(quoteLines.slice(0, 2), margin + 3, y + 7.5);
    y += 13;
  });

  // =========================================================
  // BANCO DE QUESTÕES BNCC (SEM AS RESPOSTAS NAS OPÇÕES!)
  // =========================================================
  doc.addPage();
  y = 15;
  drawPageHeader();

  drawSectionHeader('Simulado do 9º Ano: Questões BNCC (Sem Spoiler de Resposta)', 'Para Resolução Prática');

  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, y, contentWidth, 8, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(30, 41, 59);
  doc.text('INSTRUÇÃO AOS ESTUDANTES: Leia com atenção e assinale apenas uma alternativa em cada questão. O gabarito comentado encontra-se na última página.', margin + 3, y + 5);
  y += 12;

  curriculumQuestions.forEach((q, idx) => {
    checkPageBreak(28);

    // Question Number & Module
    doc.setFillColor(1, 110, 1);
    doc.roundedRect(margin, y, 22, 5, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(255, 255, 255);
    doc.text(`QUESTÃO ${idx + 1}`, margin + 2, y + 3.6);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(253, 118, 0);
    doc.text(`[Módulo ${q.chapterCode}]`, margin + 25, y + 3.6);

    y += 7;

    // Prompt
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(15, 23, 42);
    const promptLines = doc.splitTextToSize(q.prompt, contentWidth - 2);
    doc.text(promptLines, margin + 2, y);
    y += promptLines.length * 3.3 + 2;

    // Options (CLEAN, NO ANSWER CHECKMARKS!)
    q.options.forEach((opt) => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(1, 110, 1);
      doc.text(`[ ${opt.letter} ]`, margin + 2, y + 3);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(51, 65, 85);
      const optLines = doc.splitTextToSize(opt.text, contentWidth - 14);
      doc.text(optLines, margin + 12, y + 3);
      y += Math.max(optLines.length * 3.2, 5);
    });

    y += 3;
  });

  // =========================================================
  // GABARITO OFICIAL COMENTADO AO FINAL (PARA AUTOAVALIAÇÃO)
  // =========================================================
  doc.addPage();
  y = 15;
  drawPageHeader();

  drawSectionHeader('Gabarito Oficial Comentado & Habilidades BNCC', 'Uso Exclusivo Pós-Resolução');

  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin, y, contentWidth, 8, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(180, 83, 9);
  doc.text('ATENÇÃO: Consulte este gabarito apenas após responder a todas as questões para testar sua real fixação de conteúdo.', margin + 3, y + 5);
  y += 12;

  curriculumQuestions.forEach((q, idx) => {
    checkPageBreak(18);

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin, y, contentWidth, 14, 1.5, 1.5, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, contentWidth, 14, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(1, 110, 1);
    doc.text(`Questão ${idx + 1} (${q.chapterCode}): Opção Correta [ ${q.correctLetter} ]`, margin + 3, y + 4);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(51, 65, 85);
    const justLines = doc.splitTextToSize(`Justificativa: ${q.justification}`, contentWidth - 6);
    doc.text(justLines.slice(0, 2), margin + 3, y + 8);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6);
    doc.setTextColor(100, 116, 139);
    doc.text(`Competência: ${q.bnccSkill}`, margin + 3, y + 12);

    y += 16;
  });

  // Save the PDF
  doc.save('Escola_Parque_Ipiranga_Guia_Completo_A5_a_B8_Prof_Anderson_Firmo.pdf');
}
