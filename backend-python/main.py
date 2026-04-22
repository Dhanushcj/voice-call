from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
from fpdf import FPDF
import os
from typing import List

app = FastAPI(title="Antigraviity NLP Engine")

class Transcription(BaseModel):
    text: str

class ReportData(BaseModel):
    call_ids: List[str]
    client_name: str

@app.get("/")
def read_root():
    return {"message": "Antigraviity Proprietary NLP Service is Online"}

@app.post("/analyze-sentiment")
def analyze_sentiment(data: Transcription):
    # Mock NLP Logic
    text = data.text.lower()
    positive_words = ['thank', 'good', 'great', 'resolved', 'happy', 'yes']
    negative_words = ['bad', 'error', 'wrong', 'fail', 'unhappy', 'no']
    
    pos_count = sum(1 for word in positive_words if word in text)
    neg_count = sum(1 for word in negative_words if word in text)
    
    if pos_count > neg_count:
        sentiment = "Positive"
        score = 0.85
    elif neg_count > pos_count:
        sentiment = "Negative"
        score = 0.25
    else:
        sentiment = "Neutral"
        score = 0.5
        
    return {
        "sentiment": sentiment,
        "score": score,
        "action_items": ["Follow up call", "Update knowledge base"]
    }

@app.post("/generate-report")
def generate_report(data: ReportData):
    # Mock PDF Generation
    try:
        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", 'B', 16)
        pdf.cell(200, 10, txt=f"Antigraviity - Call Report for {data.client_name}", ln=True, align='C')
        
        pdf.set_font("Arial", size=12)
        pdf.ln(10)
        pdf.cell(200, 10, txt="Call Analytics Summary", ln=True)
        
        for call_id in data.call_ids:
            pdf.cell(200, 10, txt=f"- Call ID: {call_id} | Resolution: Success | Sentiment: Positive", ln=True)
            
        report_path = "latest_report.pdf"
        pdf.output(report_path)
        
        return {"message": "Report generated successfully", "file_path": report_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
